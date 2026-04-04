# Axum Template

Minimal starter for a new backend on Axum.

## Run

```bash
cp .env.example .env
cargo run
```

The server starts on `http://127.0.0.1:3000` by default.

## Env

- `APP_NAME` app name returned by `/health`
- `HOST` bind host
- `PORT` bind port
- `FRONTEND_URL` allowed frontend origin for CORS

## Routes

- `GET /` simple text response
- `GET /health` JSON healthcheck

## CORS

The template allows requests from `FRONTEND_URL` and includes credentials, `Content-Type`, and `Authorization` headers by default.

## Structure

- `src/main.rs` server entrypoint
- `src/routers` routes
- `src/handlers` HTTP handlers
- `src/services` basic business logic
- `src/state.rs` shared app state
