// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import type { Book } from '@prisma/client'


export function App() {
  const [books, setBooks] = useState<Book[]>([])
  
  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(result => result.json())
      .then(setBooks)
  }, [])

  return (
    <>
      {
        books.map((_book) => (
          <div style={{ marginBottom: '20px', border: '10px double lime', padding: '5px', backgroundColor: 'tomato' }}>
            <h3>{_book.title}</h3>
            <p>{_book.authorName}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
