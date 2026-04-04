use serde::Serialize;

#[derive(Serialize)]
pub struct HealthStatus {
    pub status: &'static str,
    pub service: String,
}

pub fn get_health(app_name: &str) -> HealthStatus {
    HealthStatus {
        status: "ok",
        service: app_name.to_owned(),
    }
}
