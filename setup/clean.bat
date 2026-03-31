@echo off
echo 🧹 Cleaning up template files...

REM Remove all files in /components directory (but keep the directory)
if exist "src\components" (
    echo Removing components...
    del /q "src\components\*.*" 2>nul
    for /d %%i in ("src\components\*") do rmdir /s /q "%%i" 2>nul
    echo ✅ Components directory cleaned
)

REM Remove /resources/constants directory
if exist "src\resources\constants" (
    echo Removing constants directory...
    rmdir /s /q "src\resources\constants"
    echo ✅ Constants directory removed
)

REM Remove /resources/data directory
if exist "src\resources\data" (
    echo Removing data directory...
    rmdir /s /q "src\resources\data"
    echo ✅ Data directory removed
)

REM Remove /resources/spojt.config.js file
if exist "src\resources\spojt.config.js" (
    echo Removing spojt.config.js...
    del "src\resources\spojt.config.js"
    echo ✅ spojt.config.js removed
)

REM Empty custom.css file (keep the file but clear content)
if exist "src\resources\custom.css" (
    echo Emptying custom.css...
    type nul > "src\resources\custom.css"
    echo ✅ custom.css emptied
)

echo 🎉 Setup complete! Your repository is ready for custom development.
echo 📝 Next steps:
echo    1. Run 'bun install' to install dependencies
echo    2. Run 'bun run dev' to start development server
echo    3. Start building your custom components and styles
pause
