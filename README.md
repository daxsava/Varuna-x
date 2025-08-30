 # 🌊 Coastal Threat Alert System

A data-driven early warning platform for monitoring **tides, wind, and coastal threats** using real-time NOAA APIs, satellite imagery, and AI/ML anomaly detection.  
The system ingests environmental data, stores it in a time-series database, and provides standardized APIs for prediction, alerts, and visualization.

---

## 📌 Features
- **Data Ingestion**
  - Pulls real-time **tide and wind data** from [NOAA CO-OPS API](https://api.tidesandcurrents.noaa.gov/).
  - Supports **satellite imagery ingestion** (Sentinel, Copernicus).
  - Runs on **cron jobs** (every 5–10 min for NOAA, 6–24 hrs for Sentinel).

- **Backend API**
  - Central API built with **Express.js** running on **AWS EC2**.
  - Standardizes telemetry, imagery, and alerts into a common format.
  - Provides REST endpoints for frontend dashboards & ML models.

- **Database**
  - **Postgres** (with optional **TimescaleDB** + **PostGIS**).
  - Optimized for time-series queries & geospatial data.

- **Security & Ops**
  - Deployed on **Ubuntu EC2** with **Nginx reverse proxy**, **HTTPS (Let’s Encrypt)**.
  - Process manager: **pm2**.
  - Safe configs via `.env`.
  - Input validation with **zod**, structured logging with **winston**.
  - Secure headers with **helmet**, **CORS** enabled.

---

## 📂 Project Structure

