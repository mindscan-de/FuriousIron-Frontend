@echo off

echo ----------------------------
echo Building the Search-Frontend
echo ----------------------------

call ng build --base-href=/SearchBackend/frontend/

echo -----------------------------
echo Deploying the Search-Frontend
echo -----------------------------

call xcopy "./dist/FuriousIron-Frontend" "../FuriousIron-SearchBackend/src/main/webapp/frontend"  /v /s /e /Y