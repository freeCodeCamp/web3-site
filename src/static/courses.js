export const courseNames = {
  web3: 'web3',
  solana: 'solana',
  near: 'near'
};

export const courseTitles = {
  web3: 'Web 3',
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
  integrated: 'integrated'
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
    description: `Here's the web 3 description.`,
    showCourse: true,
    blocks: [
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
      }
    ]
  },
  {
    name: courseNames.solana,
    title: courseTitles.solana,
    path: coursePaths.solana,
    homepage: 'https://solana.com/',
    repo: 'https://github.com/freeCodeCamp/solana-curriculum',
    repoName: 'solana-curriculum',
    description: `Here's the solana description.`,
    showCourse: true,
    blocks: [
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
      }
    ]
  },
  {
    name: courseNames.near,
    title: courseTitles.near,
    path: coursePaths.near,
    homepage: 'https://near.org/',
    repo: 'https://github.com/freeCodeCamp/near-curriculum',
    repoName: 'near-curriculum',
    description: `Here's the near description.`,
    showCourse: true,
    blocks: [
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
      }
    ]
  }
];
