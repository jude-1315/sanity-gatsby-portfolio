export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614254753694200096de97ef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yfcdahyz',
                  apiId: '0401305a-7c35-4e6e-94df-08c70cd7141d'
                },
                {
                  buildHookId: '6142547508245900d095e316',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8hgga1vo',
                  apiId: '2c39d2fe-cb89-4784-9177-242401039a0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jude-1315/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8hgga1vo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
