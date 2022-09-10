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
                  buildHookId: '631d24ae775c34238a95c766',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tg1fi55a',
                  apiId: 'bfc6160f-8d84-477a-af78-f42e06c99335'
                },
                {
                  buildHookId: '631d24af7bc2082c51cd72e1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y9osoq6c',
                  apiId: 'ea5c11a0-f554-4b6c-920e-34718b859c87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miloszmos/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y9osoq6c.netlify.app', category: 'apps'}
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
