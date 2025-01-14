
import Head from 'next/head';
import Image from 'next/image';


// Install Tailwind CSS if not already set up: https://tailwindcss.com/docs/installation
// Assuming you have a Next.js project ready.

// pages/index.js
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#1b9c4a] text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">React 19: What’s New and Improved</h1>
        </div>
      </header>

      {/* Banner Image */}
      <div className="w-full">
       <Image 
       src={"/react19.png"} 
       className="w-full h-96 object-cover" 
       width={200} 
       height={200} 
       alt='react 19'></Image>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl text-center">
          <h2 className="font-extrabold text-3xl lg:text-5xl">Key Features and Improvements</h2>

          <section>
            <h3 className="font-extrabold text-2xl lg:text-4xl">1. Improved Server Components</h3>
            <p>
              React 19 introduces enhancements to Server Components, enabling developers<br/> to build faster,
              more efficient applications by allowing server-side rendering of<br/> specific components. This
              feature is particularly useful for improving SEO and <br/>reducing client-side load times.
            </p>
          </section>

          <section>
            <h3 className="font-extrabold text-2xl lg:text-4xl">2. Better Concurrent Rendering</h3>
            <p>
              Building upon the concurrent features introduced in previous versions,<br/> React 19 further
              optimizes rendering. It improves responsiveness prioritizing<br/> user interactions and
              intelligently scheduling rendering tasks, providing a <br/>smoother user experience.
            </p>
          </section>

          <section>
            <h3 className="font-extrabold text-2xl lg:text-4xl">3. Streamlined State Management</h3>
            <p>
              React 19 simplifies state management with updates to the <code>useReducer</code><br/> and
              <code>useState</code> hooks, making it easier for developers to manage <br/>complex application
              states without relying on third-party libraries.
            </p>
          </section>

          <section>
            <h3 className="font-extrabold text-2xl lg:text-4xl">4. Automatic Dependency Updates</h3>
            <p>
              The updated dependency management system ensures that components only re-render<br/> when
              necessary, reducing unnecessary computations and improving overall <br/>application performance.
            </p>
          </section>

          <section>
            <h3 className="font-extrabold text-2xl lg:text-4xl mt-8">5. Expanded TypeScript Support</h3>
            <p className='mt-8'>
              With React 19, TypeScript integration is more robust than ever, including <br/>improved type
              inference and better tooling, making it easier for teams to adopt <br/>and maintain type-safe
              codebases.
            </p>
          </section>

          <h2 className="font-extrabold text-3xl lg:text-4xl mt-8 ">Why Upgrade?</h2>
          <p className='mt-8'>
            React 19 is designed to help developers build modern, performant applications<br/> with less
            effort. It aligns with the latest trends in web development, such as<br/> server-side rendering
            and enhanced user experience. Upgrading ensures access <br/>to these new features and prepares
            your applications for future advancements<br/> in the React ecosystem.
          </p>

          <p>
            Whether you’re maintaining an existing project or starting a new one, React 19’s<br/>
            improvements can significantly enhance productivity and application quality.<br/> Upgrade today
            and take advantage of these innovations!
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 React News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
Home