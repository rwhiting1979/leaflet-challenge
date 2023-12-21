# USGS Earthquake Visualization Tool

## Background

The United States Geological Survey (USGS) is a scientific agency of the U.S. government. They are tasked with providing reliable scientific information to describe and understand the Earth, minimize loss of life and property from natural disasters, manage water, biological, energy, and mineral resources, and enhance and protect our quality of life.

## Project Description

This project involves creating a visualization tool for USGS earthquake data. Despite collecting extensive seismic data globally, USGS requires a more effective way to display this information. The tool developed through this project aims to improve public education on seismic activity and assist in securing additional funding for Earth science initiatives.

## Instructions

### Earthquake Visualization

#### Data Acquisition

The USGS earthquake data is accessible in various formats and is updated every 5 minutes. Data for visualization is available from the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson).

#### Visualization Features

- **Map Creation**: Utilize the Leaflet library to plot earthquakes based on longitude and latitude.
- **Marker Representation**: 
  - **Magnitude**: The size of the marker indicates the earthquake's magnitude.
  - **Depth**: The color of the marker indicates the earthquake's depth, with darker colors representing greater depths.
- **Popups**: Clickable markers reveal more information about the earthquake, such as magnitude, depth, and location.
- **Legend**: A map legend provides context for marker sizes and colors, correlating to the earthquake's magnitude and depth.
