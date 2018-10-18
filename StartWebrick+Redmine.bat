@echo off
cd ..\..\..
SET RAILS_ENV=development
bundle exec rails server webrick -e development
@echo on
cmd /k