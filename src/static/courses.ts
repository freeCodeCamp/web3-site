export const courseNames = {
  web3: 'web3',
  solana: 'solana',
  near: 'near'
};

export const courseTitles = {
  web3: 'Web3',
  solana: 'Solana',
  near: 'NEAR'
};

export const coursePaths = {
  web3: '/web3',
  solana: '/solana',
  near: '/near'
};

export const projectTypes = {
  practice: 'practice',
  integrated: 'integrated',
  other: 'other'
};

// The web3 course needs to stay at the top
export const coursesInfo = [
  {
    name: courseNames.web3,
    title: courseTitles.web3,
    path: coursePaths.web3,
    homepage: null,
    repo: 'https://github.com/freeCodeCamp/web3-curriculum',
    repoName: 'web3-curriculum',
    description:
      'These courses will teach you blockchain concepts in a protocol agnostic way so that you can use what you learn with any protocol.',
    showCourse: true,
    blocks: [
      {
        title: 'Learn Digital Ledgers by Building a Blockchain',
        type: projectTypes.practice,
        summary: [
          'In this course, you will learn how to build a blockchain from scratch using JavaScript.'
        ]
      },
      {
        title:
          'Learn Proof of Work Consensus by Building a Block Mining Algorithm',
        type: projectTypes.practice,
        summary: [
          'In this course, you will learn how to use the SHA-256 hashing algorithm make your blockchain more secure.'
        ]
      },
      {
        title: 'Learn Digital Signatures by Building a Wallet',
        type: projectTypes.practice,
        summary: [
          'In this course, you will learn how to generate and use keypairs so you can verify users and transactions.'
        ]
      },
      {
        title: 'Build a Video Game Marketplace Blockchain',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will build a blockchain where you can buy and sell items for a video game.'
        ]
      },
      {
        title: 'Build a Fundraising Smart Contract',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will create and deploy a smart contract to raise funds for your start-up.'
        ]
      },
      {
        title: 'Build a Peer-to-Peer Network',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will build distributed peer-to-peer network for your blockchain.'
        ]
      },
      {
        title: 'Build a Web3 Client-Side Package for Your dApp',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will put your new Web3 knowledge to the test, by developing a package for use by client-side dApps.'
        ]
      },
      {
        title: 'Build a Smart Contract in Rust',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will build a smart contract to store and run on your blockchain.'
        ]
      },
      {
        title: 'Coming Soon',
        type: projectTypes.other,
        summary: [
          '9 more courses that will teach you blockchain concepts are coming soon!'
        ]
      }
    ]
  },
  {
    name: courseNames.solana,
    title: courseTitles.solana,
    path: coursePaths.solana,
    homepage: 'https://solana.org/',
    repo: 'https://github.com/freeCodeCamp/solana-curriculum',
    repoName: 'solana-curriculum',
    description:
      'Learn the Solana blockchain protocol with guided interactive projects and challenging integrated projects by completing the courses below.',
    showCourse: true,
    blocks: [
      {
        title:
          'Learn How to Set Up Solana by Building a Hello World Smart Contract',
        type: projectTypes.practice,
        summary: [
          'In this interactive project, you will be guided through building and deploying a smart contract to a Solana blockchain.'
        ]
      },
      {
        title: 'Learn How to Interact with On-Chain Programs',
        type: projectTypes.practice,
        summary: [
          'In this course, you will learn how to write the client code to interact with your previously deployed hello world smart contract.'
        ]
      },
      {
        title: 'Build a Smart Contract',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will use what you previously learned to build a smart contract, and interact with it.'
        ]
      },
      {
        title: "Learn Solana's Token Program by Minting a Fungible Token",
        type: projectTypes.practice,
        summary: [
          "In this course, you will learn how to use Solana's token program by minting a fungible token."
        ]
      },
      {
        title: 'Learn the Metaplex SDK by Minting an NFT',
        type: projectTypes.practice,
        summary: [
          'In this course, you will learn how to use the Metaplex JS SDK to mint an NFT.'
        ]
      },
      {
        title: 'Build a University Certification NFT',
        type: projectTypes.integrated,
        summary: [
          'In this integrated project, you will use what you previously learnt to build-out the logic for an NFT-issuing system for university certifications.'
        ]
      },
      {
        title: 'Coming Soon',
        type: projectTypes.other,
        summary: [
          '12 more courses and projects that will teach you the Solana blockchain and test your knowledge are coming soon!'
        ]
      }
    ]
  },
  {
    name: courseNames.near,
    title: courseTitles.near,
    path: coursePaths.near,
    homepage: 'https://near.foundation/',
    repo: 'https://github.com/freeCodeCamp/near-curriculum',
    repoName: 'near-curriculum',
    description:
      'Learn the NEAR blockchain protocol with guided interactive projects and challenging integrated projects by completing the courses below.',
    showCourse: true,
    blocks: [
      {
        title:
          'Learn How to Set Up NEAR by Building a Hello World Smart Contract',
        type: projectTypes.practice,
        summary: [
          'In this interactive project, you will be guided through building and deploying a smart contract to the NEAR testnet blockchain.'
        ]
      },
      {
        title: 'Learn NEAR Smart Contracts by Building a Word Guessing Game',
        type: projectTypes.practice,
        summary: [
          'In this interactive project, you will learn more features of NEAR smart contracts while building a word guessing game.'
        ]
      },
      {
        title: 'Build a Sentence Making Smart Contract',
        type: projectTypes.integrated,
        summary: [
          "In this integrated project, you test what you've learned by building a NEAR smart contract where you add words to a string, one at a time, to form a sentence."
        ]
      },
      {
        title: 'Coming Soon',
        type: projectTypes.other,
        summary: [
          '12 more courses and projects that will teach you the NEAR blockchain and test your knowledge are coming soon!'
        ]
      }
    ]
  }
];
