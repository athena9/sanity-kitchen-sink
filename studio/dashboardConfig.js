export default {
  widgets: [
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
                  buildHookId: '5fba649c596b76efabc8e3f4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8yrsqann',
                  apiId: 'd2e6d7cf-7229-4bb4-9ee2-860722651017'
                },
                {
                  buildHookId: '5fba649c706b229f190b7068',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nhiuz7qn',
                  apiId: '5b1abcc9-8090-4053-ad4a-f0fe458dfd2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/athena9/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nhiuz7qn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
