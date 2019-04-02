#!/bin/bash

export MIX_ENV=prod
export PORT=4796

echo "Stopping old copy of app, if any..."

PORT=4796 mix phx.server
#_build/prod/rel/task_tracker/bin/task_tracker stop || true

echo "Starting app..."

# Start to run in background from shell.
#_build/prod/rel/memory/bin/memory start

# Foreground for testing and for systemd
#_build/prod/rel/task_tracker/bin/task_tracker foreground

# TODO: Add a cron rule or systemd service file
#       to start your app on system boot.
