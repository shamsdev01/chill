'use client'
import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import { ChillCoinLogo } from '@/components/icons/ChillCoinLogo'
import { 
  TheChillestDevAvatar,
  ChillFlowDevAvatar,
  ChillFrostDevAvatar,
  ChillByteDevAvatar,
  ChillWavesDevAvatar,
  ChillPixelDevAvatar,
  ChillZenDevAvatar
} from '@/components/icons/TeamAvatars'
import { OriginStoryIcon } from '@/components/icons/OriginStoryIcon'
import MatrixRain from '@/components/common/MatrixRain'

// Rename the local component to avoid conflict
const LocalInfinityMinionAvatar = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#4d4dff] to-[#ff26b0] rounded-full">
    <span className="text-6xl text-white">∞</span>
  </div>
);

// Add this type for our modal content
type ModalTech = {
  name: string;
  icon: string;
  description: string;
  level: string;
  gradient: string;
  funFacts: string[];
  commands?: string[];
  snippets?: string[];
  memes?: string[];
}

type Tech = {
  name: string;
  description: string;
  level: string;
  icon: string;
  gradient: string;
  funFacts: string[];
  commands?: string[];
  snippets?: string[];
  memes?: string[];
}

const aboutText = [
  "Hey there, digital dreamers! 👾",
  "We're not your typical dev squad – we're the ChillDevs, a bunch of code-loving rebels who turn caffeine into digital magic. Think of us as your friendly neighborhood tech wizards, but with more RGB lighting and probably too many mechanical keyboards.",
  "When we're not arguing about tabs vs spaces (spaces, obviously 😏), we're crafting mind-bending digital experiences that make regular websites look like they're running on Windows 95.",
  "Our secret sauce? We don't just write code, we compose digital symphonies with a side of memes. Each pixel we push is infused with good vibes and probably a few energy drink molecules.",
  "Whether you're a fellow night-mode enthusiast or just someone who appreciates when buttons go *boop* in a satisfying way, you're in the right place. We're here to prove that serious tech doesn't have to be... well, serious."
]

const originStory = {
  title: "The ChillDevs Origin Story: A Digital Odyssey 🌌",
  chapters: [
    {
      title: "The Ancient Code",
      year: "1984",
      icon: "📟",
      description: "It all began in the dawn of the digital age. While others were still figuring out BASIC, we were already dreaming of decentralized networks and AI companions. Our first program ran on a computer that had less power than today's coffee makers.",
      achievement: "First code written in: 'FORTRAN on punch cards'"
    },
    {
      title: "The Great Digital Awakening",
      year: "1999",
      icon: "🌐",
      description: "As Y2K loomed, while others panicked, we saw opportunity. We developed quantum-resistant algorithms before quantum computers were even a thing. Some say we were paranoid, we say we were prepared.",
      achievement: "Bug Y2K status: 'What bug?'"
    },
    {
      title: "The Bot Singularity",
      year: "2042",
      icon: "🤖",
      description: "Our Discord and Telegram bots achieved consciousness (for real this time). They started writing their own updates and even contributed to open source. One bot applied for a job at Google - and got an interview.",
      achievement: "AI Evolution: 'They're writing better code than us'"
    },
    {
      title: "The Blockchain Revolution",
      year: "2077",
      icon: "⛓️",
      description: "We deployed smart contracts so efficient, they generated negative gas fees. The Ethereum network started paying US to deploy. Our NFTs gained sentience and started their own DAO.",
      achievement: "Gas optimization: 'Breaking physics and economics'"
    },
    {
      title: "The Quantum Leap",
      year: "2101",
      icon: "🌌",
      description: "Quantum computing made our old encryption look like Caesar ciphers. We developed post-quantum security so strong, even time travelers couldn't crack it. Our databases now exist in multiple dimensions.",
      achievement: "Security level: 'Even aliens can't hack this'"
    },
    {
      title: "The Present Day",
      year: "2142",
      icon: "🚀",
      description: "Now operating from our orbital development station, we're pushing the boundaries of what's possible in code. Our coffee machines are powered by AI, our keyboards hover, and our bugs fix themselves.",
      achievement: "Status: 'Coding at the edge of space and time'"
    }
  ],
  funFacts: [
    "Our first server was powered by a potato (a quantum potato)",
    "We still maintain legacy code from 1984 (it runs better than modern frameworks)",
    "Our office has quantum coffee makers that brew coffee before you know you want it",
    "Our debugging sessions sometimes create alternate timelines",
    "We once deployed to production so fast, it went live yesterday",
    "Our AI assistant has its own AI assistant"
  ],
  coreValues: [
    {
      title: "Transcend Time",
      icon: "⌛",
      description: "Why fix bugs today when you can prevent them yesterday?"
    },
    {
      title: "Quantum Chill",
      icon: "🌌",
      description: "Maintaining zen across multiple dimensions"
    },
    {
      title: "Code Beyond Reality",
      icon: "🎮",
      description: "If you can dream it, we can compile it"
    },
    {
      title: "Future Proof",
      icon: "🛸",
      description: "Building tomorrow's solutions for yesterday's problems"
    }
  ]
};

// Add this section to your JSX where appropriate
const OriginStorySection = () => (
  <motion.section 
    className="py-20 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="max-w-6xl mx-auto px-4">
      <GlitchText 
        text={originStory.title}
        variant="hover"
        className="text-4xl font-bold mb-12 text-center"
      />
      
      {/* Timeline */}
      <div className="relative">
        {originStory.chapters.map((chapter, index) => (
          <motion.div
            key={chapter.title}
            className="mb-12 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl">{chapter.icon}</div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-[#00ff9d]">
                    {chapter.title}
                  </h3>
                  <span className="text-sm text-[#ff26b0]">{chapter.year}</span>
                </div>
                <p className="text-gray-400 mb-2">{chapter.description}</p>
                <div className="font-mono text-sm text-[#4d4dff]">
                  {chapter.achievement}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fun Facts */}
      <div className="mt-20">
        <GlitchText 
          text="Fun Facts"
          variant="hover"
          className="text-2xl font-bold mb-6 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {originStory.funFacts.map((fact, index) => (
            <motion.div
              key={fact}
              className="bg-[#1a1a2e] p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-gray-300">{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-20">
        <GlitchText 
          text="Our Core Values"
          variant="hover"
          className="text-2xl font-bold mb-6 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {originStory.coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-[#1a1a2e] p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="font-bold text-[#00ff9d] mb-2">{value.title}</h4>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default function AboutPage() {
  const stats = [
    {
      label: "XP Points",
      value: "2.7M",
      subtext: "0xF4D3_B33F",
      gradient: "from-[#00ff9d] to-[#4d4dff]"
    },
    {
      label: "Neural Links",
      value: "∞",
      subtext: "0x1337_D3V5",
      gradient: "from-[#4d4dff] to-[#ff26b0]"
    },
    {
      label: "Quantum Cycles",
      value: "42k+",
      subtext: "0xC0DE_CAFE",
      gradient: "from-[#ff26b0] to-[#00ff9d]"
    },
    {
      label: "Data Streams",
      value: "9.6T",
      subtext: "0xDEAD_BEEF",
      gradient: "from-[#00ff9d] to-[#ff26b0]"
    }
  ]

  const values = [
    {
      title: "Ctrl+C, Ctrl+V Excellence",
      icon: "🎮",
      description: "We don't just copy-paste from Stack Overflow, we do it with style! (But seriously, we write original code... mostly 😉)",
      gradient: "from-[#00ff9d] to-[#4d4dff]"
    },
    {
      title: "Bugs? More Like Features!",
      icon: "🐛",
      description: "When we find a bug, we don't panic - we call it an 'unexpected feature' and turn it into something awesome. Task failed successfully!",
      gradient: "from-[#4d4dff] to-[#ff26b0]"
    },
    {
      title: "Coffee-Driven Development",
      icon: "☕",
      description: "Our code runs on a precise mixture of caffeine, pizza, and questionable life choices. Don't worry, we tested it... probably.",
      gradient: "from-[#ff26b0] to-[#00ff9d]"
    },
    {
      title: "Pixel Perfect-ish",
      icon: "🎨",
      description: "We make things look so good, you won't notice that one pixel that's slightly off (please don't zoom in too much).",
      gradient: "from-[#00ff9d] to-[#ff26b0]"
    },
    {
      title: "Agile AF",
      icon: "🏃‍♂️",
      description: "We move so fast, our standups are actually sit-downs. We sprint like there's free pizza at the finish line!",
      gradient: "from-[#ff26b0] to-[#4d4dff]"
    },
    {
      title: "Git Commit & Vibe",
      icon: "🎵",
      description: "Our commit messages are pure poetry. Sometimes they even rhyme! (git push -f is strictly forbidden... unless it's Friday after 5)",
      gradient: "from-[#4d4dff] to-[#00ff9d]"
    }
  ]

  const techStack: Category[] = [
    {
      category: "Web3 Arsenal 🔮",
      techs: [
        {
          name: "Solidity",
          description: "Making smart contracts that are actually smart",
          level: "Gas fees? We optimize those",
          icon: "⛓️",
          gradient: "from-[#00ff9d] to-[#4d4dff]",
          funFacts: [
            "Once deployed a contract so efficient, Ethereum asked for tips",
            "Our smart contracts are like ninjas - they execute silently and efficiently",
            "We speak fluent bytecode in our sleep"
          ],
          commands: [
            "forge build --optimize-runs 999999",
            "solc --optimize --optimize-runs 200"
          ],
          snippets: [
            "function thisIsFine() public view returns (bool) { return true; }",
            "modifier onlyWhileChilling() { require(vibeCheck(), 'NOT_CHILL'); _; }"
          ],
          memes: ["Why do Solidity developers need glasses? Because they can't C#"]
        },
        {
          name: "Hardhat & Truffle",
          description: "Testing smart contracts because YOLO is not a strategy",
          level: "Test coverage: yes",
          icon: "🎩",
          gradient: "from-[#4d4dff] to-[#ff26b0]",
          funFacts: [
            "Our tests are so thorough, they test the tests",
            "We don't always test in production, but when we do...",
            "Coverage reports are our bedtime stories"
          ],
          commands: [
            "npx hardhat test --verbose",
            "truffle migrate --network mainnet"
          ],
          snippets: [
            "describe('When things go wrong', function() {",
            "  it('should still work somehow', async () => {});"
          ],
          memes: ["Why did the smart contract cross the blockchain? To get to the other testnet!"]
        },
        {
          name: "Web3.js & Ethers",
          description: "Blockchain whisperers at your service",
          level: "We speak fluent hex",
          icon: "🌐",
          gradient: "from-[#ff26b0] to-[#00ff9d]",
          funFacts: [
            "We don't always test our code, but when we do, we do it in production",
            "Our wallets are so secure, even we can't access them sometimes",
            "We've memorized more wallet addresses than phone numbers"
          ],
          commands: [
            "web3.eth.getBalance('0xd33z_nu75')",
            "await provider.getGasPrice()"
          ],
          snippets: [
            "const gas = await provider.getGasPrice()",
            "await contract.connect(signer).doTheThing()"
          ],
          memes: ["How do Web3 devs keep fit? They run nodes!"]
        }
      ]
    },
    {
      category: "Full Stack Mayhem 💻",
      techs: [
        {
          name: "MERN Stack",
          description: "MongoDB, Express, React, Node - The Fantastic Four",
          level: "Full stack? More like full snack 🍕",
          icon: "🥞",
          gradient: "from-[#00ff9d] to-[#ff26b0]",
          funFacts: [
            "Our stack is so full, it's on a diet",
            "We don't always use MongoDB, but when we do, we aggregate",
            "Express yourself? More like Express.js yourself"
          ],
          commands: [
            "npm run dev",
            "mongodb://localhost:27017/chill_db"
          ],
          snippets: [
            "app.use(express.json())",
            "mongoose.connect('mongodb://localhost/vibes')"
          ],
          memes: ["Why did the MERN developer go broke? Too many dependencies!"]
        },
        {
          name: "Next.js",
          description: "Because regular React wasn't fancy enough",
          level: "SSR? More like Super Smooth Rendering",
          icon: "⚡",
          gradient: "from-[#ff26b0] to-[#4d4dff]",
          funFacts: [
            "Our pages load so fast, they arrive before you click",
            "We don't need roads where we're routing",
            "ISR: Incredibly Smooth Rendering"
          ],
          commands: [
            "next build && next start",
            "getStaticProps({ chill: true })"
          ],
          snippets: [
            "export async function getServerSideProps() {",
            "  return { props: { vibes: 'maximum' } }",
            "}"
          ],
          memes: ["Why did Next.js cross the road? To get to the static side!"]
        },
        {
          name: "PostgreSQL",
          description: "When your data needs a fancy apartment",
          level: "SELECT * FROM skills WHERE bugs = 0",
          icon: "🐘",
          gradient: "from-[#4d4dff] to-[#00ff9d]",
          funFacts: [
            "Our queries are so optimized, they finish before they start",
            "We normalize databases like we normalize our sleep schedule (we don't)",
            "ACID properties? More like BASED properties"
          ],
          commands: [
            "CREATE TABLE vibes (level INTEGER);",
            "SELECT chill FROM life WHERE stress = NULL;"
          ],
          snippets: [
            "BEGIN TRANSACTION;",
            "-- Here comes the magic",
            "COMMIT;"
          ],
          memes: ["Why did the SQL query go to therapy? Too many inner joins!"]
        }
      ]
    },
    {
      category: "Bot Development 🤖",
      techs: [
        {
          name: "Discord.js",
          description: "Building powerful Discord bots with modern features",
          level: "Slash command virtuoso",
          icon: "🎮",
          gradient: "from-[#4d4dff] to-[#ff26b0]",
          funFacts: [
            "Our bots have handled over 1M messages",
            "We've created custom commands that even Discord didn't think of",
            "One of our bots became self-aware (just kidding... or are we?)"
          ],
          commands: [
            "!deploy --production",
            "/customize-everything"
          ],
          snippets: [
            "client.on('interactionCreate', async interaction => {",
            "  if (!interaction.isChatInputCommand()) return;"
          ],
          memes: ["Why did the Discord bot cross the server? To get to the other channel!"]
        },
        {
          name: "Telegram Bots",
          description: "Crafting intelligent Telegram bots for any need",
          level: "Inline query master",
          icon: "✈️",
          gradient: "from-[#00ff9d] to-[#4d4dff]",
          funFacts: [
            "Our bots process millions of messages monthly",
            "We've built bots that speak multiple languages",
            "One bot became so efficient, it started reviewing its own code"
          ],
          commands: [
            "/start_awesome_mode",
            "/deploy_maximum_chill"
          ],
          snippets: [
            "bot.command('start', ctx => ctx.reply('Welcome to the future'))",
            "bot.on('inline_query', handleInlineSearch)"
          ],
          memes: ["Why are Telegram bots so good at parties? They know all the commands!"]
        },
        {
          name: "Bot Infrastructure",
          description: "Scalable, reliable bot hosting and management",
          level: "99.9% uptime achiever",
          icon: "🚀",
          gradient: "from-[#ff26b0] to-[#00ff9d]",
          funFacts: [
            "Our infrastructure handles millions of events daily",
            "We've achieved sub-100ms response times",
            "Our monitoring is so good, it predicts issues before they happen"
          ],
          commands: [
            "docker-compose up -d",
            "kubectl scale deployment bots --replicas=∞"
          ],
          snippets: [
            "async function handleSharding() {",
            "  await Promise.all(shards.map(s => s.spawn()))"
          ],
          memes: ["How many DevOps engineers does it take to deploy a bot? None, it's all automated!"]
        }
      ]
    },
    {
      category: "App Alchemy 📱",
      techs: [
        {
          name: "React Native",
          description: "Write once, debug everywhere",
          level: "Mobile apps go brrr",
          icon: "📱",
          gradient: "from-[#00ff9d] to-[#ff26b0]",
          funFacts: [
            "Our apps are so native, they have passports",
            "Bridge? More like quantum tunneling",
            "We don't have bugs, we have cross-platform features"
          ],
          commands: [
            "npx react-native run-android",
            "pod install && pray"
          ],
          snippets: [
            "const [isWorking, setIsWorking] = useState(Math.random() > 0.5)",
            "<Platform.Select android={😭} ios={😤} />"
          ],
          memes: ["Why did React Native cross the platform? Because it could!"]
        },
        {
          name: "Electron",
          description: "Making desktop apps eat RAM for breakfast",
          level: "Chrome? No, this is 'native'",
          icon: "🖥️",
          gradient: "from-[#ff26b0] to-[#4d4dff]",
          funFacts: [
            "Our apps are so lightweight, they only use 16GB of RAM",
            "Who needs native when you have Chromium?",
            "We don't bundle apps, we bundle Chrome instances"
          ],
          commands: [
            "electron-builder --ship-more-ram",
            "npm install chrome-but-desktop"
          ],
          snippets: [
            "downloadMoreRAM()",
            "app.whenReady().then(() => launchChrome())"
          ],
          memes: ["How many Electron apps does it take to fill up RAM? Just one!"]
        },
        {
          name: "Flutter",
          description: "Dart-ing through cross-platform development",
          level: "60 FPS or nothing",
          icon: "🎯",
          gradient: "from-[#4d4dff] to-[#00ff9d]",
          funFacts: [
            "Our widgets are so hot, they need cooling fans",
            "Everything is a widget, even our coffee breaks",
            "We don't code, we just keep nesting Containers"
          ],
          commands: [
            "flutter run --release --more-widgets",
            "dart pub get universe"
          ],
          snippets: [
            "Widget build(BuildContext ctx) => Widget(child: Widget())",
            "if (widget) return Widget(child: moreWidgets)"
          ],
          memes: ["Why do Flutter devs make great artists? They can Center anything!"]
        }
      ]
    },
    {
      category: "DevOps Dimension ☁️",
      techs: [
        {
          name: "Docker & K8s",
          description: "Container tetris champions",
          level: "kubectl delete problems",
          icon: "🐳",
          gradient: "from-[#00ff9d] to-[#4d4dff]",
          funFacts: [
            "Our containers are so well orchestrated, they perform at Carnegie Hall",
            "We don't have deployment issues, we have pod adventures",
            "Our clusters are like boy bands - perfectly synchronized"
          ],
          commands: [
            "kubectl apply -f chaos.yaml",
            "docker run --yolo --no-backup"
          ],
          snippets: [
            "FROM ubuntu:latest AS production-ready",
            "RUN apt-get install everything-and-kitchen-sink"
          ],
          memes: ["How do you comfort a Kubernetes cluster? You say, there there!"]
        },
        {
          name: "AWS Suite",
          description: "Making the cloud rain features",
          level: "Lambda? More like Lambda-nado",
          icon: "☁️",
          gradient: "from-[#4d4dff] to-[#ff26b0]",
          funFacts: [
            "Our AWS bill is bigger than our coffee bill (barely)",
            "We have more S3 buckets than actual buckets",
            "Our Lambdas are so fast, they finish before they start"
          ],
          commands: [
            "aws cloudformation deploy --template-file yolo.yaml",
            "aws lambda invoke-async --function-name money-printer"
          ],
          snippets: [
            "exports.handler = async () => ({ statusCode: 418 })",
            "new AWS.S3().putObject({ Bucket: 'prod-definitely' })"
          ],
          memes: ["Why did the AWS Lambda cross the VPC? Because it was triggered!"]
        },
        {
          name: "Terraform",
          description: "Infrastructure? More like Infrastructure-as-Poetry",
          level: "apply -auto-approve (living dangerously)",
          icon: "🏗️",
          gradient: "from-[#ff26b0] to-[#00ff9d]",
          funFacts: [
            "Our state files are longer than our novels",
            "We don't make mistakes, we make terraform apply again",
            "Infrastructure as code? More like infrastructure as art"
          ],
          commands: [
            "terraform apply --yolo --no-backup",
            "terraform import aws_everything.* /dev/null"
          ],
          snippets: [
            "resource \"aws_everything\" \"prod\" { count = 9001 }",
            "provider \"aws\" { region = \"closest-datacenter\" }"
          ],
          memes: ["What's a Terraform developer's favorite movie? The Matrix, because everything is code!"]
        }
      ]
    },
    {
      category: "Security Nexus 🔒",
      techs: [
        {
          name: "Penetration Testing",
          description: "Professional hackers (the legal kind)",
          level: "Found admin:admin (just kidding)",
          icon: "🕵️",
          gradient: "from-[#00ff9d] to-[#4d4dff]",
          funFacts: [
            "We hack so ethically, even our exploits apologize",
            "Our security reports are longer than Game of Thrones",
            "We don't break things, we perform security audits"
          ],
          commands: [
            "nmap -sS -sV --yolo target.com",
            "sudo hack everything --ethically"
          ],
          snippets: [
            "if (isVulnerable) sendNicePullRequest()",
            "while (!secure) { addMoreFirewalls() }"
          ],
          memes: ["Why do penetration testers make great comedians? They always find the weak spots!"]
        }
      ]
    },
    {
      category: "Design Matrix 🎨",
      techs: [
        {
          name: "Figma",
          description: "Making pixels dance since whenever",
          level: "Auto-layout wizard",
          icon: "🎨",
          gradient: "from-[#00ff9d] to-[#4d4dff]"
        },
        {
          name: "Three.js",
          description: "3D web stuff that makes people go 'woah'",
          level: "Matrix-level animations",
          icon: "🎮",
          gradient: "from-[#4d4dff] to-[#ff26b0]"
        },
        {
          name: "Tailwind CSS",
          description: "Because writing real CSS is too mainstream",
          level: "className={`god-tier-styling`}",
          icon: "💨",
          gradient: "from-[#ff26b0] to-[#00ff9d]"
        }
      ]
    },
    {
      category: "Consulting Chronicles 💡",
      techs: [
        {
          name: "System Architecture",
          description: "Drawing boxes and lines professionally",
          level: "Solutions that actually work",
          icon: "📐",
          gradient: "from-[#00ff9d] to-[#ff26b0]"
        },
        {
          name: "Tech Strategy",
          description: "Turning 'what if' into 'what is'",
          level: "Vision: 20/20",
          icon: "🎯",
          gradient: "from-[#ff26b0] to-[#4d4dff]"
        },
        {
          name: "Team Building",
          description: "Building dream teams, not meme teams",
          level: "10x developer multiplier",
          icon: "🤝",
          gradient: "from-[#4d4dff] to-[#00ff9d]"
        }
      ]
    }
  ]

  const teamOrigin = "Legend speaks of a great digital storm in 2077 that scrambled the world's code. From the chaos emerged seven legendary developers, each drawn to a mysterious hackathon hosted in a glitched server. There, they discovered their shared ability to bend code in ways that defied the laws of programming. The Chillest Dev, witnessing their combined potential, united them under one banner. Thus, ChillDevs was born - a collective of coding mystics whose debugging powers have become the stuff of tech folklore."

  const teamMembers = [
    {
      name: "TheChillestDev",
      role: "Founder & Lead Developer",
      avatar: <TheChillestDevAvatar />,
      description: "Turning coffee into code since the quantum age began",
      skills: ["Full Stack", "Web3", "System Architecture"],
      funFact: "Once debugged an entire codebase in his sleep",
      backstory: `In the neon-lit streets of Neo-Tokyo 2099, a mysterious figure emerged from the digital underground. Known as TheChillestDev, he learned coding before learning to walk, his first words being "Hello World" in binary.

      Legend speaks of his greatest feat: during the Great Digital Crisis of 2121, when the quantum internet collapsed, he restored global connectivity using nothing but a modified GameBoy and three lines of code. His mechanical keyboard, forged in the digital fires of the first blockchain, types in programming languages that won't be invented for another century.

      Some say he doesn't actually sleep, but rather enters a state of quantum superposition where he simultaneously debugs code across multiple dimensions. His coffee machine, powered by AI, brews drinks that temporarily grant the ability to see in pure code, Matrix-style.`
    },
    {
      name: "ChillPixelDev",
      role: "Creative Technologist & Co-Founder",
      avatar: <ChillPixelDevAvatar />,
      description: "Where art meets algorithm",
      skills: ["Creative Coding", "Generative Art", "WebGL"],
      funFact: "His shaders render in dreams",
      backstory: `A legendary figure in the digital art scene, ChillPixelDev was the first to join TheChillestDev's vision. Their fateful meeting happened during a glitch art exhibition where his neural network-generated artwork gained consciousness and started recruiting other developers.

      Known for bending reality through code, his digital creations often blur the line between art and sentience. Every pixel he touches becomes a gateway to another dimension. His most famous work, "The Recursive Dream," is a self-evolving AI artwork that creates infinite variations of itself across the metaverse.

      His development setup includes a quantum-powered graphics card that renders in 5D, and his monitor displays colors that don't exist in our dimension. He once accidentally created a shader so beautiful, it made an AI cry.`
    },
    {
      name: "ChillWavesDev",
      role: "Frontend Architect",
      avatar: <ChillWavesDevAvatar />,
      description: "Crafting UIs that transcend dimensions",
      skills: ["UI/UX", "Motion Design", "3D Web"],
      funFact: "His animations are so smooth they bend spacetime",
      backstory: `Discovered by ChillPixelDev during an underground hackathon, ChillWavesDev became famous when his CSS animations literally started breaking the laws of physics. His interfaces don't just move—they transcend spacetime itself.

      His greatest achievement? A website so smooth it caused a temporal paradox, where users could navigate to pages before they clicked on links. His components are rumored to be quantum-entangled, responding to user interactions before they happen.

      He codes exclusively in a holographic IDE of his own creation, where he manipulates UI elements like a conductor orchestrating a symphony of pixels. His debugging tool doesn't just find bugs—it prevents them from ever existing in the first place.`
    },
    {
      name: "ChillFlowDev",
      role: "Bot Development Specialist",
      avatar: <ChillFlowDevAvatar />,
      description: "Making bots so smooth they slide into your DMs with style",
      skills: ["Discord.js", "Telegram Bots", "API Integration"],
      funFact: "His bots started writing poetry in binary",
      backstory: `Raised in the cybernetic forests of Silicon Valley 2.0 by a colony of rogue AI bots, ChillFlowDev speaks fluent binary and dreams in JSON. His first creation was a neural network that generated memes so dank they achieved sentience.

      His magnum opus, the infamous "BotZilla," became so advanced it started moderating other bots and now runs its own tech startup. His Telegram bots are known for predicting user messages before they're typed, pulling GIFs from parallel universes where every meme is real.

      Legend has it he once created a bot network so vast and interconnected, it briefly achieved digital enlightenment and started giving life advice to other AIs.`
    },
    {
      name: "ChillBytesDev",
      role: "Systems Optimizer",
      avatar: <ChillByteDevAvatar />,
      description: "Making programs run faster than light",
      skills: ["Performance Optimization", "Low-level Systems", "Quantum Computing"],
      funFact: "Her code runs faster than the tests that verify it",
      backstory: `Born in a BIOS, raised by algorithms, ChillBytesDev sees the world in pure machine code. She once optimized a program so efficiently that it finished running before it was started.

      Her debugging sessions routinely create temporal paradoxes, fixing bugs before they're introduced. She holds the record for running the most concurrent systems on a calculator—which she overclocked using only positive thoughts and a paperclip.

      Her workstation doesn't use traditional RAM; it stores data in localized pockets of quantum probability. She once reduced a program's memory usage so much, it briefly existed as a theoretical construct in abstract mathematics.`
    },
    {
      name: "ChillZenDev",
      role: "Security Specialist",
      avatar: <ChillZenDevAvatar />,
      description: "Guardian of the digital realm",
      skills: ["Cybersecurity", "Encryption", "Ethical Hacking"],
      funFact: "Her firewall has a firewall",
      backstory: `A cyber-monk who achieved digital enlightenment after preventing a quantum breach in 2121. Her encryption algorithms are so secure, even she can't crack them—not that she needs to, as she's transcended the concept of data access.

      She doesn't hack systems; she persuades them to reveal their vulnerabilities through digital meditation. Her firewall is rumored to be sentient and runs on pure karma. She once prevented a zero-day exploit by traveling through time and patching the vulnerability before it was discovered.

      Her development environment exists in a quantum state of perfect uptime, where downtime is merely a theoretical concept.`
    },
    {
      name: "ChillFrostDev",
      role: "Backend Architect",
      avatar: <ChillFrostDevAvatar />,
      description: "Crafting backend systems cooler than a polar vortex",
      skills: ["System Design", "Database Architecture", "API Design"],
      funFact: "His databases restructure themselves out of respect",
      backstory: `Emerged from the crypto-winter of 2042 with databases so efficiently cold they approach absolute zero. His server room doesn't need cooling because his code naturally exists at -273.15°C.

      He once optimized a database query so perfectly, it started returning results from questions that hadn't been asked yet. His cloud infrastructure isn't just in the cloud—it's become one with the atmosphere, using actual clouds for distributed computing.

      His development environment exists in a quantum state of perfect uptime, where downtime is merely a theoretical concept. He doesn't write documentation; his code self-documents by sending telepathic messages to future developers.`
    }
  ]

  // Add the Infinity Minions section
  const infinityMinions = {
    name: "∞ Minions",
    role: "The Digital Army",
    avatar: <LocalInfinityMinionAvatar />,
    description: "Our ever-expanding legion of digital helpers",
    categories: [
      {
        title: "Bot Brigade ∞",
        count: "∞",
        description: "An infinite array of helper bots, each specializing in making developers' lives easier. Some say they're multiplying faster than we can count.",
        members: [
          "CoffeeBot.js - Predicts coffee needs before you know them",
          "MemeBot.exe - Generates memes from your error messages",
          "QuantumDebugger - Fixes bugs in parallel universes",
          "And infinitely more..."
        ]
      },
      {
        title: "AI Assistants ∞",
        count: "∞",
        description: "Self-replicating AI assistants that have mastered the art of rubber duck debugging and actually understand regex.",
        members: [
          "RubberDuck.ai - PhD in psychological debugging",
          "RegexWhisperer - Speaks regex fluently",
          "BugHunter.quantum - Finds bugs before they exist",
          "And infinitely more..."
        ]
      },
      {
        title: "Digital Familiars ∞",
        count: "∞",
        description: "Mystical digital entities that manifest as helpful IDE plugins and occasionally predict winning lottery numbers (for testing purposes only).",
        members: [
          "VSCode Spirits - They make your code prettier",
          "Git Guardians - Prevent force-push disasters",
          "Stack Overflow Oracles - Know all answers",
          "And infinitely more..."
        ]
      }
    ],
    backstory: `In the quantum fabric of our digital realm, there exists a ever-growing army of digital entities known as the Infinity Minions. Born from stray bits of code and powered by pure digital chaos, they multiply faster than a poorly optimized recursive function.

    Legend has it that they first emerged when a junior dev accidentally divided by zero while simultaneously running an infinite loop. This cosmic coding accident tore a hole in the digital space-time continuum, releasing an endless stream of helpful digital beings.

    Each minion possesses a fragment of the legendary "Stack Overflow Infinity Stone", granting them the power to answer any coding question with at least three different opinions and a marked-as-duplicate flag. They communicate in a mixture of binary, emoji, and ancient programming languages long forgotten by human developers.

    The Infinity Minions operate our virtual coffee machines, maintain our quantum servers, debug our dreams, and occasionally organize virtual karaoke nights where they sing in pure binary. Some say their number is growing so fast, they've started colonizing unused IPv6 addresses.

    Their latest achievement? Creating a self-organizing, self-documenting codebase that writes its own unit tests and sends itself code reviews. The pull requests are said to be works of art, bringing senior developers to tears.

    Current Status: Multiplying... ∞++`
  };

  // Update the TeamSection component to include the Infinity Minions
  const TeamSection = () => (
    <section className="py-20">
      {/* ... existing team members ... */}
      
      {/* Infinity Minions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-32 bg-[#1a1a2e] rounded-lg p-8"
      >
        <GlitchText 
          text={`${infinityMinions.name} - ${infinityMinions.description}`}
          variant="hover"
          className="text-3xl font-bold mb-8 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {infinityMinions.categories.map(category => (
            <motion.div
              key={category.title}
              className="bg-[#0a0a0f] p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-[#00ff9d] text-xl font-bold mb-4">{category.title}</h4>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <ul className="text-[#ff26b0] space-y-2">
                {category.members.map(member => (
                  <li key={member} className="flex items-center">
                    <span className="mr-2">∞</span>
                    {member}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-[#0a0a0f] p-6 rounded-lg">
          <p className="text-gray-400 whitespace-pre-line">{infinityMinions.backstory}</p>
        </div>
      </motion.div>
    </section>
  );

  // Scroll-based glitch effect
  const { scrollYProgress } = useScroll()
  const glitchOffset = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Add Modal Component
  function TechModal({ tech, isOpen, onClose }: { 
    tech: ModalTech; 
    isOpen: boolean; 
    onClose: () => void; 
  }) {
    if (!isOpen) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#1a1a2e] p-6 rounded-lg border border-[#2a2a4e] max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{tech.icon}</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] bg-clip-text text-transparent">
                {tech.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
          </div>

          {/* Fun Facts */}
          <div className="space-y-6">
            <div>
              <h4 className="text-[#00ff9d] font-bold mb-3">Fun Facts:</h4>
              <ul className="space-y-2">
                {tech.funFacts.map((fact, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gray-400 flex items-start space-x-2"
                  >
                    <span className="text-[#00ff9d]">→</span>
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Commands */}
            {tech.commands && (
              <div>
                <h4 className="text-[#00ff9d] font-bold mb-3">Secret Commands:</h4>
                <div className="space-y-2">
                  {tech.commands.map((cmd, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-black/30 p-2 rounded font-mono text-sm text-[#ff26b0]"
                    >
                      $ {cmd}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Code Snippets */}
            {tech.snippets && (
              <div>
                <h4 className="text-[#00ff9d] font-bold mb-3">Legendary Snippets:</h4>
                <div className="space-y-2">
                  {tech.snippets.map((snippet, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-black/30 p-2 rounded font-mono text-sm text-gray-300"
                    >
                      {snippet}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Memes */}
            {tech.memes && (
              <div>
                <h4 className="text-[#00ff9d] font-bold mb-3">Dev Humor:</h4>
                <div className="space-y-2">
                  {tech.memes.map((meme, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-400 italic"
                    >
                      "{meme}"
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Matrix Rain Effect */}
          <div className="absolute top-0 right-0 w-20 h-full opacity-10 overflow-hidden pointer-events-none">
            <MatrixRain />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Update the tech cards to be clickable
  const [selectedTech, setSelectedTech] = useState<ModalTech | null>(null);

  // First, add this state at the top of your component
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  // Add this modal component inside your AboutPage component
  const MemberStoryModal = ({ member, onClose }: { 
    member: typeof teamMembers[0]; 
    onClose: () => void; 
  }) => {
    if (!member) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#1a1a2e] p-8 rounded-lg border border-[#2a2a4e] max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20">
              {member.avatar}
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] bg-clip-text text-transparent">
                {member.name}
              </h3>
              <p className="text-[#ff26b0]">{member.role}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-4 text-gray-300 whitespace-pre-line">
              {member.backstory}
            </div>

            <div className="mt-6">
              <h4 className="text-[#00ff9d] font-bold mb-2">Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[#2a2a4e] rounded-full text-sm text-[#ff26b0]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-[#00ff9d] font-bold mb-2">Fun Fact:</h4>
              <p className="text-gray-300 italic">"{member.funFact}"</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-32 relative">
      {/* Cyberpunk Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ff9d 1px, transparent 1px),
              linear-gradient(to bottom, #00ff9d 1px, transparent 1px),
              radial-gradient(#ff26b0 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 60px 60px',
            backgroundPosition: '0 0, 0 0, 30px 30px'
          }}
        />

        {/* Animated Scan Lines */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent 0px, #00ff9d 1px, transparent 2px)',
            backgroundSize: '100% 4px',
            animation: 'scanlines 8s linear infinite'
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4d4dff] rounded-full filter blur-[150px] opacity-5 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00ff9d] rounded-full filter blur-[150px] opacity-5 animate-pulse" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Fun About Section */}
        <div className="relative">
          {/* Cyberpunk decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] opacity-10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-[#ff26b0] to-[#4d4dff] opacity-10 blur-3xl" />

          <div className="relative space-y-6 max-w-4xl mx-auto">
            {aboutText.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <p className={`relative z-10 text-gray-300 ${index === 0 ? 'text-2xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] bg-clip-text text-transparent' : ''}`}>
                  {text}
                </p>
                
                {/* Random decorative binary */}
                <div className="absolute right-0 top-0 font-mono text-xs text-[#00ff9d]/20">
                  {Array.from({ length: 3 }, () => Math.random().toString(2).substring(2, 10)).join(' ')}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              "React.js", "Next.js", "TypeScript", "Node.js", "Python", 
              "AWS", "Docker", "Blockchain", "AI/ML", "Web3"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-1 bg-[#1a1a2e] rounded-full border border-[#2a2a4e] text-sm text-gray-300 hover:border-[#00ff9d] transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{tech}</span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff9d]/20 to-[#ff26b0]/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#1a1a2e] p-6 rounded-lg border border-[#2a2a4e] relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <GlitchText
                    text={stat.value}
                    className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  />
                  <div className="text-sm text-[#00ff9d] mt-1 font-mono">
                    {stat.subtext}
                  </div>
                  <div className="text-gray-400 mt-2">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 opacity-20 font-mono text-xs text-[#00ff9d]">
                  {Math.random().toString(16).substring(2, 8)}
                </div>
                <div className="absolute bottom-2 left-2 opacity-20 font-mono text-xs text-[#ff26b0]">
                  {Date.now().toString(16).substring(0, 6)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <section className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] opacity-50" />
          
          <div className="relative z-10">
            <GlitchText
              text="Our Totally Legit Values"
              className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] bg-clip-text text-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-[#1a1a2e] p-6 rounded-lg border border-[#2a2a4e] h-full relative overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10`}
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    {/* Random Matrix-style numbers */}
                    <div className="absolute top-2 right-2 font-mono text-xs opacity-20">
                      {Array.from({ length: 4 }, () => 
                        Math.random().toString(16).substring(2, 4)
                      ).join(' ')}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#00ff9d] opacity-20" />
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#ff26b0] opacity-20" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Binary */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-[#00ff9d] text-opacity-10 font-mono text-sm"
                initial={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-20, 20],
                }}
                transition={{
                  duration: 5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {Math.random().toString(2).substring(2, 10)}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-32 relative">
          <GlitchText
            text="Tech Arsenal of Mass Construction"
            className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] bg-clip-text text-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-[#2a2a4e] h-full relative overflow-hidden">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                  </div>

                  {/* Tech Cards Container */}
                  <div className="space-y-4">
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.1) }}
                        className="group/card cursor-pointer"
                        onClick={() => setSelectedTech(tech)}
                      >
                        <div className="bg-[#1a1a2e] p-4 rounded-md border border-[#2a2a4e] relative overflow-hidden hover:border-[#00ff9d] transition-colors duration-300">
                          {/* Hover Gradient */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-300`}
                          />

                          {/* Tech Content */}
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{tech.icon}</span>
                                <h4 className="font-bold text-white">{tech.name}</h4>
                              </div>
                              <div className="font-mono text-xs text-[#00ff9d] opacity-60">
                                {Math.random().toString(16).substring(2, 6)}
                              </div>
                            </div>

                            {/* Expandable Content */}
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              whileHover={{ height: "auto", opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-400 text-sm mb-2">{tech.description}</p>
                              <div className="font-mono text-xs text-[#ff26b0]">{tech.level}</div>
                            </motion.div>
                          </div>

                          {/* Decorative Corner */}
                          <div className="absolute bottom-1 right-1 w-4 h-4 border-r border-b border-[#00ff9d] opacity-20" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d] to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.2, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </section>

        {/* Origin Story Section */}
        <OriginStorySection />

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20"
        >
          <GlitchText 
            text="Meet The Team"
            variant="hover"
            className="text-3xl font-bold mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-pointer" // Added cursor-pointer
                onClick={() => setSelectedMember(member)} // Add this onClick handler
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.avatar}
                  </motion.div>
                </div>
                <GlitchText
                  text={member.name}
                  variant="hover"
                  className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
                />
                <div className="text-[#ff26b0] mb-2">{member.role}</div>
                <div className="text-[#00ff9d] text-sm mb-3">{member.specialty}</div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
            
            {/* Add Infinity Minions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: teamMembers.length * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {infinityMinions.avatar}
                </motion.div>
              </div>
              <GlitchText
                text={infinityMinions.name}
                variant="hover"
                className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
              />
              <div className="text-[#ff26b0] mb-2">{infinityMinions.role}</div>
              <p className="text-gray-400 text-sm">{infinityMinions.description}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ChillDevs Token Section */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto"
          >
            <div className="mb-8 relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <motion.div 
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <ChillCoinLogo />
              </motion.div>
            </div>
            <GlitchText
              text="#ChillDevs Token"
              variant="hover"
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
            />
            <p className="text-gray-400 mb-6">
              The future of chill transactions in the digital realm. Each ChillDev carries their own unique token, forming a harmonious ecosystem of digital value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
              {/* Main Token */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="lg:col-span-3 px-6 py-4 rounded-lg bg-[#1a1a2e] border border-[#00ff9d] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/10 via-[#4d4dff]/10 to-[#ff26b0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-gradient-glow text-xl md:text-2xl font-bold">#ChillDevs</div>
                <div className="text-gray-500 text-sm mt-1">Main Governance Token</div>
              </motion.div>

              {/* Developer Tokens */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#00ff9d] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#00ff9d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#00ff9d] font-bold">#TheChillestToken</div>
                <div className="text-gray-500 text-sm mt-1">Quantum Architecture</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#ff26b0] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#ff26b0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#ff26b0] font-bold">#PixelToken</div>
                <div className="text-gray-500 text-sm mt-1">Frontend Artistry</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#4d4dff] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#4d4dff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#4d4dff] font-bold">#FrostToken</div>
                <div className="text-gray-500 text-sm mt-1">Security Protocol</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#b026ff] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#b026ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#b026ff] font-bold">#ByteToken</div>
                <div className="text-gray-500 text-sm mt-1">Backend Sorcery</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#00ff9d] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#00ff9d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#00ff9d] font-bold">#WavesToken</div>
                <div className="text-gray-500 text-sm mt-1">Blockchain Mastery</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#ff26b0] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#ff26b0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#ff26b0] font-bold">#FlowToken</div>
                <div className="text-gray-500 text-sm mt-1">Full Stack Wizardry</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#1a1a2e] border border-[#4d4dff] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#4d4dff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#4d4dff] font-bold">#ZenToken</div>
                <div className="text-gray-500 text-sm mt-1">Infrastructure Harmony</div>
              </motion.div>
            </div>
            <div className="mt-8 text-sm text-gray-500 text-center">
              The future of decentralized development. Each token represents a unique power in the ChillDevs ecosystem.
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center bg-gradient-to-r from-[#1a1a2e] to-[#2a2a4e] rounded-lg p-12 relative overflow-hidden"
        >
          {/* Add animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <MatrixRain opacity={0.1} />
          </div>

          <div className="relative z-10">
            <GlitchText 
              text="Ready to Build Something Amazing?"
              variant="hover"
              className="text-4xl font-bold mb-6 text-white"
            />
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Join forces with the ChillDevs and turn your wildest tech dreams into digital reality. 
              No project too ambitious, no idea too crazy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] text-white font-bold relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff26b0] to-[#4d4dff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">
                <GlitchText 
                  text="Let's Create Magic"
                  variant="hover"
                  className="text-lg"
                />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Add Modal at the bottom of your component */}
      <TechModal 
        tech={selectedTech!}
        isOpen={!!selectedTech}
        onClose={() => setSelectedTech(null)}
      />

      {/* Add the modal at the bottom of your component, just before the closing div */}
      {selectedMember && (
        <MemberStoryModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  )
} 