# 🖥️ ALX Project 0x00 – Next.js Fundamentals

This project introduces the **essence of creating a project using CLI tools** like `npx`, coupled with `create-next-app`.  
It demonstrates how to scaffold a modern web application using **React, TypeScript, and Next.js**, while applying best practices such as ESLint, Tailwind CSS, and clean import aliases.  

---

## 📌 Objective

- Understand how to set up a **Next.js project** using the `create-next-app` CLI tool.  
- Learn the difference between:
  - Using the **interactive prompts** with `npx create-next-app@latest`  
  - Using **predefined options** with CLI flags (this approach).  

---

## ⚙️ Project Setup

### 1. Create Project
Run the following command in your terminal:

```bash
npx create-next-app@latest alx-project-0x00 --typescript
````

### 2. Configuration Options

When prompted, select the following:

* ✅ Yes for **ESLint**
* ✅ Yes for **Tailwind CSS**
* ✅ Yes for **Import alias** (`@/*`)
* ❌ No for **/src directory**
* ❌ No for **App Router**

### 3. Navigate into Project

```bash
cd alx-project-0x00
```

### 4. Start Development Server

```bash
npm run dev -- -p 3000
```

Your application will be available at 👉 [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

* **Next.js** – React framework for production
* **React** – UI component library
* **TypeScript** – Strongly typed JavaScript superset
* **Tailwind CSS** – Utility-first CSS framework
* **ESLint** – Linting for code quality

---

## 📂 Project Structure

```
alx-project-0x00/
 ┣ 📄 README.md
 ┣ 📄 package.json
 ┣ 📄 tsconfig.json
 ┣ 📄 tailwind.config.js
 ┣ 📂 components/
 ┣ 📂 pages/
 ┣ 📂 public/
 ┣ 📂 styles/
```

---

## 🚀 Running the App

After installation, run:

```bash
npm run dev -- -p 3000
```

Then visit [http://localhost:3000](http://localhost:3000) to view your app.

---

## ✨ Learning Focus

* CLI-driven project creation with `create-next-app`.
* Configuring **TypeScript, ESLint, Tailwind, and import aliases**.
* Understanding project setup choices like `/src` directory and App Router.
* Running and exploring a **Next.js development server**.

---

## 📚 Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---
