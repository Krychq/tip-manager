# 💰 Tip Manager

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Tip Manager** is a lightning-fast, modern web application designed to help service workers and drivers effortlessly calculate and track their daily tips. Built with the latest Next.js 15 and React 19, it features a clean, accessible interface for managing earnings on the go.

🌐 **See it in action:** [https://tips-manager.netlify.app/](https://tips-manager.netlify.app/)

## ✨ Features

* **Smart Calculations:** Instantly figure out the tip amount by entering the base fare (*cena przejazdu*) and the total cash handed over by the customer. 
* **Quick-Add Buttons:** Speed up data entry with pre-defined, one-tap buttons for common denominations (5 zł, 10 zł, 20 zł, 30 zł, 50 zł).
* **Dual Input Modes:** Flexibly switch between "Fare + Tip" (*Przejazd + napiwek*) and "Only Tip" (*Tylko napiwek*) recording modes.
* **Running Total:** Keep a real-time tally of your total accumulated tips in złotówkach.
* **Modern UI/UX:** Fully responsive, accessible, and sleek design powered by Tailwind CSS v4 and Radix UI primitives.

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Library:** React 19
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Components:** Shadcn UI, Lucide React (Icons)

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm, yarn, pnpm, or bun

### Installation & Execution

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Krychq/tip-manager.git
    cd tip-manager
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    This project uses Turbopack for lightning-fast local development.
    ```bash
    npm run dev
    ```

4.  **View the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📂 Project Structure Snapshot

A quick overview of the core application architecture:

* **`src/app/`**: Contains the Next.js App Router core files (`page.tsx`, `layout.tsx`, `globals.css`).
* **`src/components/ui/`**: Houses reusable UI components built with Radix and Tailwind.
* **`src/components/TipForm.tsx`**: The main interactive form for entering fares and calculating tips.
* **`src/components/TipList.tsx`**: Component responsible for rendering the history/list of recorded tips.
* **`src/lib/`**: Contains utility functions (`utils.ts`) and TypeScript type definitions (`types.ts`).

## 🤝 Contributing

Contributions are always welcome! Whether it's adding a new feature, fixing a bug, or improving documentation, feel free to open a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. Feel free to use it for your own educational purposes!
