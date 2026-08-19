$ErrorActionPreference = 'Stop'
$python = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
& $python (Join-Path $PSScriptRoot 'prepare_media.py')
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
