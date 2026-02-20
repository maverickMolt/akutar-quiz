'use client';

import { archetypes, ArchetypeId } from '@/lib/archetypes';
import { logQuizCompletion } from '@/lib/supabase';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ResultPage() {
  const params = useParams();
  const archetypeId = params.archetype as ArchetypeId;
  const archetype = archetypes[archetypeId];

  // Log completion to analytics
  useEffect(() => {
    if (archetype) {
      logQuizCompletion(archetype.id);
    }
  }, [archetype]);

  if (!archetype) {
    return <div>Archetype not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#1E3A8A] to-[#0A1128] p-4">
      <div className="max-w-4xl mx-auto py-12">
        
        {/* Hero/Reveal */}
        <div className="text-center mb-12 animate-in fade-in zoom-in duration-700">
          <div className="text-7xl mb-6">👨🏾‍🚀</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            YOU ARE: {archetype.name.toUpperCase()}
          </h1>
          <p className="text-2xl text-[#FCD34D] italic mb-8">
            {archetype.tagline}
          </p>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {archetype.description}
          </p>
        </div>

        {/* Traits Section */}
        <div className="mb-12 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            YOUR {archetype.name.toUpperCase()} TRAITS
          </h2>
          <div className="space-y-6">
            {Object.entries(archetype.traits).map(([key, value]) => {
              const meaning = archetype.traitMeanings[key as keyof typeof archetype.traitMeanings];
              return (
                <div key={key} className="border-l-4 border-[#10B981] pl-6">
                  <p className="text-[#FCD34D] font-semibold uppercase text-sm mb-1">
                    {key}
                  </p>
                  <p className="text-xl text-white font-bold mb-2">
                    ✦ {value}
                  </p>
                  <p className="text-gray-300">
                    → {meaning}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Astronauts */}
        <div className="mb-12 bg-gradient-to-br from-[#7C3AED]/20 to-[#DC2626]/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            REAL {archetype.name.toUpperCase()}S LIKE YOU
          </h2>
          <div className="space-y-6">
            {archetype.realAstronauts.map((astronaut, index) => (
              <div key={index} className="border-l-4 border-[#FCD34D] pl-6">
                <p className="text-xl text-white font-bold mb-1">
                  🚀 {astronaut.name}
                </p>
                <p className="text-gray-300 mb-2 italic">
                  {astronaut.achievement}
                </p>
                <p className="text-gray-200">
                  "{astronaut.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Qualities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            YOUR {archetype.name.toUpperCase()} QUALITIES:
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {archetype.qualities.map((quality, index) => (
              <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <span className="text-[#10B981] mr-3">✓</span>
                <span className="text-gray-200">{quality}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mb-12 text-center p-8 bg-gradient-to-r from-[#DC2626]/20 to-[#7C3AED]/20 backdrop-blur-sm rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">YOUR MISSION</h2>
          <p className="text-xl text-gray-100 leading-relaxed">
            {archetype.mission}
          </p>
        </div>

        {/* Akutar Match (Placeholder - will integrate OpenSea API) */}
        <div className="mb-12 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">YOUR AKUTAR MATCH</h2>
          <p className="text-gray-300 mb-6">
            We're matching you with Akutars that share your {archetype.name.toLowerCase()} spirit...
          </p>
          <a 
            href={`https://opensea.io/collection/akutars?search[query]=${archetype.traits.helmet}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#10B981] text-white font-semibold rounded-full hover:bg-[#FCD34D] hover:text-black transition-all"
          >
            Explore {archetype.name}s on OpenSea →
          </a>
        </div>

        {/* CTAs */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">📖 Read Aku's Story</h3>
            <p className="text-gray-300 mb-4">
              Follow Aku's journey to Ibra—a planet where dreamers like you discover their true potential.
            </p>
            <a 
              href="https://www.penguinrandomhouse.com/books/746514/aku-journey-to-ibra-by-micah-johnson/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#FCD34D] font-semibold transition-colors"
            >
              Pre-Order Book →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">🌌 Explore the Collection</h3>
            <p className="text-gray-300 mb-4">
              Browse all 14,833 Akutars and see the diversity of the Akuverse.
            </p>
            <a 
              href="https://opensea.io/collection/akutars"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#FCD34D] font-semibold transition-colors"
            >
              OpenSea Collection →
            </a>
          </div>
        </div>

        {/* Share */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Share Your Results!</h3>
          <div className="flex gap-4 justify-center">
            <a
              href={`https://twitter.com/intent/tweet?text=I'm ${archetype.name} in the Akuverse! ${archetype.tagline} 🚀 Discover your Akutar match: ${typeof window !== 'undefined' ? window.location.origin : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a8cd8] transition-colors"
            >
              Share on Twitter
            </a>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied!');
                }
              }}
              className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/30 hover:bg-white/20 transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Retake */}
        <div className="text-center">
          <Link 
            href="/quiz"
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            Take Quiz Again
          </Link>
        </div>
      </div>
    </main>
  );
}
