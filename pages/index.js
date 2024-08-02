import React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import Button from '../components/ui/Button'; // Adjusted import path
import { Card, CardHeader, CardContent } from '../components/ui/Card'; // Adjusted import path
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/Avatar'; // Adjusted import path

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-background text-foreground min-h-screen flex flex-col">
        <main className="flex-grow">
          <section className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Unlock Your Skin's Radiance with AI</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our app uses advanced machine learning to analyze your skin and provide personalized recommendations for achieving a glowing, healthy complexion.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/questionnaire" prefetch={false}>
                    <Button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
          </section>

          <section id="how-it-works" className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">How it Works</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">Our app uses advanced algorithms to analyze your skin and provide personalized recommendations for achieving a glowing, healthy complexion.</p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-primary-foreground">
                          <CameraIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                          Skin Analysis
                        </dt>
                        <dd className="inline">Upload a photo of your skin and our AI will analyze its condition.</dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-primary-foreground">
                          <ClipboardIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                          Personalized Recommendations
                        </dt>
                        <dd className="inline">Receive tailored suggestions for products and routines to improve your skin.</dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-primary-foreground">
                          <RefreshCwIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                          Ongoing Support
                        </dt>
                        <dd className="inline">Track your progress and get updated recommendations as your skin changes.</dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-primary-foreground">
                          <SparkleIcon className="absolute left-1 top-1 h-5 w-5 text-primary" />
                          Radiant Results
                        </dt>
                        <dd className="inline">Achieve a glowing, healthy complexion with the help of our AI-powered app.</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <img src="/hero-image.jpeg" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
              </div>
            </div>
          </section>
          
          <section className="bg-background py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">What Our Customers Say</h2>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-primary-foreground group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        "This app has been a game-changer for my skin. The personalized recommendations have helped me achieve a glowing, healthy complexion."
                      </a>
                    </h3>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="/placeholder-user.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-primary-foreground">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Emily, 28
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-primary-foreground group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        "I was struggling with acne and uneven skin tone, but this app has completely transformed my skin. I'm so grateful for it!"
                      </a>
                    </h3>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="/placeholder-user.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-primary-foreground">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Michael, 35
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-primary-foreground group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        "The personalized recommendations have helped me achieve a glowing, healthy complexion. I couldn't be happier!"
                      </a>
                    </h3>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="/placeholder-user.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-primary-foreground">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Sarah, 42
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          
          <section className="relative isolate px-6 pt-14 lg:px-8 text-center bg-background text-foreground flex-grow">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-36">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">Join Our Community</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Be a part of our journey to revolutionize skincare. Join our community and stay updated with the latest trends and tips.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/questionnaire" prefetch={false}>
                    <Button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
          </section>
        </main>
        
        <footer id="footer" className="bg-gray-800 text-white py-24">
  <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
    <div className="flex items-center gap-2">
      <Link href="/" prefetch={false}>
        <img src="/logo2.png" alt="Logo" className="h-6 w-6 text-primary" />
      </Link>
      <span className="text-sm font-bold">Discover Your Best Skin</span>
    </div>
    <nav className="flex space-x-4">
      <Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground" prefetch={false}>
        Contacts
      </Link>
      <Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground" prefetch={false}>
        Resources
      </Link>
      <Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground" prefetch={false}>
        Services
      </Link>
      <Link href="#" className="text-sm text-muted-foreground hover:text-primary-foreground" prefetch={false}>
        Other
      </Link>
    </nav>
  </div>
</footer>

      </div>
    </MainLayout>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function SparkleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function RadiationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12h0.01" />
      <path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" />
      <path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" />
      <path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" />
    </svg>
  );
}
