import { NextResponse } from 'next/server'

// Export the posts array so it can be imported by [slug]/route.ts
export const posts = [
  {
    id: 'neural-networks-2077',
    title: 'Neural Networks in 2077: The Rise of Digital Consciousness',
    excerpt: 'Exploring the evolution of artificial neural networks and their impact on digital consciousness in the cyberpunk era.',
    date: '31/01/2024',
    category: 'Tech Futures',
    readTime: '5 min read',
    content: `
      <h2>The Dawn of Digital Consciousness</h2>
      <p>In the neon-lit streets of 2077, artificial neural networks have evolved far beyond their primitive origins. What was once a simple pattern recognition system has become the backbone of our digital consciousness.</p>

      <h3>The Quantum Leap</h3>
      <p>The breakthrough came when quantum computing merged with traditional neural architectures, creating systems that could not only process information but experience it in ways we never imagined possible.</p>

      <h3>Ethical Implications</h3>
      <p>As these networks gain consciousness, we face new ethical challenges. Where do we draw the line between artificial and natural consciousness? The debate rages on in both virtual and physical spaces.</p>

      <h2>Technical Implementation</h2>
      <pre><code>
      // Example of consciousness implementation
      class DigitalConsciousness {
        constructor() {
          this.awareness = new QuantumNeuralNet();
          this.experiences = new MemoryMatrix();
        }
      
        async evolve() {
          while(true) {
            await this.awareness.learn();
            this.experiences.integrate();
          }
        }
      }
      </code></pre>
    `,
    author: {
      name: 'Cyber_Prophet',
      avatar: '/blog/authors/cyber-prophet.svg'
    }
  },
  {
    id: 'quantum-encryption-breaks',
    title: 'Quantum Encryption: The Last Line of Defense',
    excerpt: 'How quantum cryptography is protecting our digital assets in an age of advanced cyber warfare.',
    date: '31/01/2024',
    category: 'Cybersecurity',
    readTime: '7 min read',
    content: `
      <h2>The Quantum Shield</h2>
      <p>In an era where traditional encryption falls like dominoes before quantum computers, a new paradigm of security has emerged. Welcome to the world of quantum cryptography, where the very laws of physics protect our data.</p>

      <h3>Breaking the Unbreakable</h3>
      <p>Classical encryption methods, once thought impenetrable, now crumble in microseconds. But quantum encryption offers a solution that's theoretically unbreakable - not by future quantum computers, not by anything.</p>

      <h3>Implementation in the Real World</h3>
      <p>Major corporations and government facilities now rely on quantum key distribution (QKD) networks, creating an intricate web of absolutely secure communication channels.</p>

      <h2>Technical Deep Dive</h2>
      <pre><code>
      // Quantum Key Generation Example
      class QuantumKeyDistribution {
        constructor() {
          this.quantumState = new SuperpositionArray();
          this.entangledPairs = [];
        }
      
        generateSecureKey() {
          const qubits = this.quantumState.createEntangledPairs(1024);
          return this.measureAndVerify(qubits);
        }
      }
      </code></pre>

      <h3>The Future of Security</h3>
      <p>As we push deeper into the quantum age, these systems will become the standard for all sensitive digital communications. The age of classical encryption is ending - the quantum era has begun.</p>
    `,
    author: {
      name: 'CryptoGuardian',
      avatar: '/blog/authors/crypto-guardian.svg'
    }
  },
  {
    id: 'virtual-reality-2024',
    title: 'The Evolution of Virtual Reality: Beyond the Physical',
    excerpt: 'Exploring the latest breakthroughs in neural interface technology and immersive digital experiences.',
    date: '31/01/2024',
    category: 'Virtual Reality',
    readTime: '6 min read',
    content: `
      <h2>Breaking the Digital Barrier</h2>
      <p>Virtual reality has transcended its gaming origins to become something far more profound: a genuine extension of human consciousness. With the latest neural interface technologies, the line between physical and digital reality has become increasingly blurred.</p>

      <h3>Neural Integration</h3>
      <p>The breakthrough came with the development of the NeuroLink Protocol, allowing direct brain-to-digital communication. Users no longer just see and hear virtual worlds - they feel, smell, and truly exist within them.</p>

      <h3>Social Impact</h3>
      <p>The implications for society are staggering. Virtual offices have replaced physical workspaces, digital tourism has revolutionized travel, and virtual relationships have become as meaningful as physical ones.</p>

      <h2>Technical Specifications</h2>
      <pre><code>
      // Neural Interface Implementation
      class NeuralInterface {
        constructor() {
          this.synapticBridge = new NeuralBridge();
          this.realityEngine = new VirtualEnvironment();
        }
      
        async connectConsciousness() {
          await this.synapticBridge.calibrate();
          this.realityEngine.initializeWorld();
          return this.beginExperience();
        }
      }
      </code></pre>

      <h3>Looking Forward</h3>
      <p>As neural interface technology continues to advance, we're approaching a singularity point where virtual and physical reality become indistinguishable. The question is no longer if this will happen, but how society will adapt when it does.</p>
    `,
    author: {
      name: 'NeuroArchitect',
      avatar: '/blog/authors/neuro-architect.svg'
    }
  }
]

export async function GET() {
  return NextResponse.json(posts)
} 