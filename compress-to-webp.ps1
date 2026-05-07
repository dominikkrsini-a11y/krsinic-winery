param(
  [string]$Folder = ".\public\images",
  [int]$MaxKB = 300,
  [int]$MaxWidth = 1920,
  [int]$MinQ = 35,
  [int]$StartQ = 82,
  [int]$MinWidth = 960
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $Folder)) {
  throw "Folder not found: $Folder"
}

$exts = @("*.jpg","*.jpeg","*.png","*.tif","*.tiff","*.bmp","*.gif")
$files = foreach ($e in $exts) { Get-ChildItem -Path $Folder -File -Filter $e -Recurse }

if ($files.Count -eq 0) {
  Write-Host "No images found in $Folder"
  exit 0
}

foreach ($f in $files) {
  $src = $f.FullName
  $dst = [System.IO.Path]::ChangeExtension($src, ".webp")

  Write-Host ""
  Write-Host "Converting: $src"

  $width = $MaxWidth
  $success = $false

  while ($true) {
    $q = $StartQ

    while ($true) {
      & magick "$src" -auto-orient -resize "${width}x>" -strip -define webp:method=6 -quality $q "$dst" | Out-Null
      $sizeKB = [math]::Ceiling((Get-Item "$dst").Length / 1KB)
      Write-Host "  width=$width  quality=$q  size=${sizeKB}KB"

      if ($sizeKB -le $MaxKB) {
        $success = $true
        break
      }

      if ($q -le $MinQ) { break }
      $q -= 7
    }

    if ($success) { break }

    if ($width -le $MinWidth) { break }
    $width = [math]::Max($MinWidth, [int][math]::Floor($width * 0.85))
  }

  if ($success) {
    Remove-Item -LiteralPath "$src" -Force
    Write-Host "  Replaced original with: $dst"
  } else {
    Write-Warning "Not replaced (still > ${MaxKB}KB at width ${width}px): $dst"
  }
}

Write-Host ""
Write-Host "Done."

