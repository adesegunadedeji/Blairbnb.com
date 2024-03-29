import Link from 'next/link'
import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown';

// const Index = props =>(

//     <Layout>
//         <h1>Lets Watch Batman</h1>
//         <ul>
//         {props.shows.map(show => (
//             <li key={show.id}>
//                 <Link href="/p/[id]" as ={`/p/${show.id}`}>
//                 <a>{show.name}</a>
//                     </Link>
//             </li>
//             ))}
//         </ul>
//     </Layout>
// );

// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//     console.log(`Show  fetch data, Count: ${data.length}`)
//     return {
//         shows: data.map(entry=>entry.show)
//     }
// };

// export default Index
function getPosts() {
    return [
      { id: 'hello-nextjs', title: 'Hello Next.js' },
      { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
      { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
  }
  
  const PostLink = ({ post }) => (
    <li>
      <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </li>
  );
  
  export default function Blog() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }
  
          ul {
            padding: 0;
          }
  
          li {
            list-style: none;
            margin: 5px 0;
          }
  
          a {
            text-decoration: none;
            color: blue;
          }
  
          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    );
  }

