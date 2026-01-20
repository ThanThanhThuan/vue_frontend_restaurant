# Frontend from Vue + Vite for Restaurant App

Tech Stack: Vue 3 (Composition API), Vite, Tailwind CSS, Vue Router, Axios.

<img width="1607" height="855" alt="image" src="https://github.com/user-attachments/assets/5c8d351b-c424-46ba-894c-24f57a7f4607" />


The frontend is a responsive Single Page Application (SPA) based on the "Culinary Heaven" design. It interacts with the backend via HTTP requests.

    Key Features & Architecture:

        Routing (router/index.js): Manages navigation between Home, Reservation, Tickets, Menu, and Admin pages without reloading the browser.

        Environment Variables (.env): Uses VITE_API_URL to manage the backend connection string dynamically.

        Tailwind CSS: Used for all styling, including custom fonts (Serif/Sans) and color palette (Gold/Black).

    Pages (Views):

        Home (HomeView.vue): The landing page broken into reusable components (HeroSection, IntroSection, Delicatessen, EventsSection, Footer).

        Reservation (ReservationView.vue): A 3-step wizard (Guests -> Dynamic Calendar -> Time Slots). It sends data to the backend API upon completion.

        Menu (MenuView.vue): Displays categorized lists of food items (Appetizers, Soups, Specialties, Desserts).

        Tickets (TicketView.vue): A flow for selecting event tickets, adjusting quantities, calculating totals, and a mock payment form.

        Admin (AdminView.vue): A protected-style dashboard that fetches and displays the reservation data stored in MongoDB.

    How to Run:

        Navigate to the folder: cd restaurant-frontend

        Start server: npm run dev (Runs on port 5173).
