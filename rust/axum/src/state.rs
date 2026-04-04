#[derive(Clone)]
pub struct AppState {
    pub app_name: String,
}

impl AppState {
    pub fn new(app_name: String) -> Self {
        Self { app_name }
    }
}
