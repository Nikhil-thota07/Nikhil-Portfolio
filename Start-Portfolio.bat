@echo off
title Nikhil Thota Portfolio
cd /d "%~dp0"
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
echo ==============================================
echo   Nikhil Thota - Personal Portfolio Website
echo ==============================================
echo Starting local web server...
start "" "http://localhost:5173"
call "%LOCALAPPDATA%\Programs\nodejs\npm.cmd" run preview -- --port 5173 --host
pause
