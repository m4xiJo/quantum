@echo off
cd ..\..\..

bundle exec rails server webrick -e development
@echo on
cmd /k
