defmodule TaskTracker3.Repo do
  use Ecto.Repo,
    otp_app: :task_tracker3,
    adapter: Ecto.Adapters.Postgres
end
