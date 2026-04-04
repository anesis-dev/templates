use axum::{Json, extract::State};

use crate::{services, state::AppState};

pub async fn health(State(state): State<AppState>) -> Json<services::health::HealthStatus> {
    Json(services::health::get_health(&state.app_name))
}
