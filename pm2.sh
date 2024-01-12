#!/bin/bash
# Created by Hendi Santika
# Created Date: Tuesday, Nov 14 2023 7:20 WIB GMT+7
# Visit me: https://s.id/hendisantika
if ! type pm2 > /dev/null
then
    sudo pnpm install -g pm2 && pm2 start ecosystem.config.cjs  --name "PORTOFOLIO WEB APP"
else
    pm2 restart "PORTOFOLIO WEB APP"
fi
