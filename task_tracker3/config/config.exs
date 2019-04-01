# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :task_tracker3,
  ecto_repos: [TaskTracker3.Repo]

# Configures the endpoint
config :task_tracker3, TaskTracker3Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ei7+sjSss6Cdp+J3q58Qaqz39mGNKB/Yw5pUGB7RBoZhE9NEFN1filh01G+d+q2f",
  render_errors: [view: TaskTracker3Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TaskTracker3.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
