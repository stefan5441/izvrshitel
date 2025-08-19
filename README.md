# Izvrshitel

A modern web application that provides an improved interface for browsing real estate auction listings from the Chamber of Enforcement Agents of  Macedonia.

## 🌐 Live Demo

Visit the application at: [izvrshitel.netlify.app](https://izvrshitel.netlify.app/)

## 📋 Overview

Izvrshitel scrapes and displays real estate auction data from [Комора на извршители на република македонија](https://kirm.mk/?page_id=1694). The original website has poor filtering capabilities and an outdated interface, so this project provides:

- **Better filtering** - Advanced search and filter options
- **Improved UI/UX** - Clean, modern interface built with React
- **Automated updates** - Daily data scraping via GitHub Actions
- **Enhanced usability** - Pagination and responsive design

## 🏗️ Architecture

### Data Collection

- **Scraping**: `scrape.js` - Cheerio-based web scraper
- **Storage**: `scrapedData.json` - Daily updated JSON data file
- **Automation**: GitHub Actions workflow runs scraper once daily

### Frontend

- **Framework**: Vite + TypeScript + React
- **Styling**: Basic CSS
- **Deployment**: Netlify

## 📁 Project Structure

```
├── scrape.js                # Web scraper script
├── scrapedData.json         # Scraped auction data
└── frontend/                # React application
    └── src/
        ├── App.tsx          # Main application component
        ├── Filters.tsx      # Search and filter interface
        ├── Pagination.tsx   # Page navigation component
        ├── PostingCard.tsx  # Individual listing display
        ├── types.ts         # TypeScript type definitions
        ├── utils.ts         # Utility functions
        ├── index.css        # Global styles
        └── main.tsx         # Application entry point
```

## 🚀 Getting Started

### Installation

1. Clone the repository

```bash
git clone git@github.com:stefan5441/izvrshitel.git
cd izvrshitel
```

2. Install dependencies for the scraper and run the scraper

```bash
npm install
node scrape.js (optional - data is updated daily via GitHub Actions)
```

3. Install frontend dependencies

```bash
cd frontend
npm install
```

4. Start the development server

```bash
npm run dev
```

## 🔄 Data Updates

The application automatically updates its data daily through a GitHub Actions workflow that:

1. Runs the scraper script
2. Updates `scrapedData.json`
3. Commits changes back to the repository
4. Triggers Netlify deployment

## 🛠️ Technologies Used

- **Scraping**: Cheerio.js
- **Frontend**: React, TypeScript, Vite
- **Styling**: CSS
- **Automation**: GitHub Actions
- **Hosting**: Netlify

## 📝 About Enforcement Agents

Извршители (Enforcement Agents) are legal professionals in  Macedonia who handle the enforcement of court decisions, including the seizure and auction of real estate from individuals who owe money to banks or government institutions. This application makes it easier to browse and filter these auction listings.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.
