"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo from '@/app/favicon.ico'

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = ['Web Design', 'App design', 'Logo Design', 'Branding'];

interface InterestChangeHandler {
	(interest: string): void;
}

const handleInterestChange: InterestChangeHandler = (interest) => {
	setSelectedInterests((prev: string[]) =>
		prev.includes(interest)
			? prev.filter((item) => item !== interest)
			: [...prev, interest]
	);
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        interests: selectedInterests,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(`✅ Thanks! We'll reach out to ${email} soon.`);
      setEmail('');
      setSelectedInterests([]);
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('❌ Something went wrong!');
  }
};

  return (
    <>
      <Head>
        <title>Unfold Academy - Level up your design career</title>
        <meta name="description" content="Courses and workshops for all things branding, web, illustration and product design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="min-h-screen pt-24 px-4 md:px-12 pb-16 relative overflow-hidden bg-unfold-light-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[calc(100vh-6rem)]">
          {/* Left Content Area */}
          <div className="flex flex-col justify-center items-start pr-4 relative z-10">
            {/* Unfold Academy Logo/Text */}
            <div className="flex items-center space-x-2 mb-4">
			<Image src={logo} alt='logo' width={32} height={32} />
             <span className="font-semibold font-guzan text-lg text-gray-800">Hi I&apos;m Narendra Nishad</span>

            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-sink lg:text-8xl font-extrabold leading-tight mb-6 text-unfold-dark-text">
              How Can<br />I Help You!
            </h1>

            {/* Description */}
            <p className="text-sm font-inter  text-gray-700 md:text-xl text-unfold-dark-text mb-8 max-w-lg">
             Offering a unique blend of development expertise and design acumen, I deliver complete, user-centric web solutions.
            </p>

            {/* Interest Selection Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <p className="text-unfold-dark-text mb-4 font-inter">
                My name is <input
                  type="text"
                  placeholder="Your Name"
                  className="inline-block border-b-2 border-gray-400 focus:border-black outline-none px-2 py-1 bg-transparent w-32"
                />, and I&apos;m interested in
              </p>

              <div className="flex flex-wrap gap-3 mb-6 highlight-button-group">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
                      ${selectedInterests.includes(interest)
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      value={interest}
                      checked={selectedInterests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    {interest}
                  </label>
                ))}
              </div>

              <p className="text-unfold-dark-text mb-4">
                You can reach me at <input
                  type="email"
                  placeholder="you@youremail.com"
                  className="inline-block border-b-2 border-gray-400 focus:border-black outline-none px-2 py-1 bg-transparent w-60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />.
              </p>

              <div className="flex items-center space-x-4">
                {/* Keep Me Posted Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-md"
                >
           
                  Keep Me Posted
                </button>
              </div>
            </form>

          
          </div>

          {/* Right Illustration Area */}
          <div className="relative overflow-hidden flex items-center justify-center bg-unfold-green rounded-bl-[100px] rounded-tl-[100px] rounded-br-[100px] mt-8 lg:mt-0 lg:ml-8" style={{ minHeight: '400px' }}>
         
         <Image src={'/contact.png'} alt='logo' height={2000} width={2000} /> 
         
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;