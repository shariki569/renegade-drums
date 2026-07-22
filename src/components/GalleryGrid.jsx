import { useState } from 'react'
import { GALLERY_PAGE_SIZE } from '../constants'

export default function GalleryGrid({ items, pageSize = GALLERY_PAGE_SIZE, className = 'gallery_grid', label = 'Gallery' }) {
  const [page, setPage] = useState(0)
  const size = Math.max(1, pageSize)
  const totalPages = Math.max(1, Math.ceil(items.length / size))
  const safePage = Math.min(page, totalPages - 1)
  const start = safePage * size
  const visible = items.slice(start, start + size)

  return (
    <>
      <div className={className}>
        {visible.map((item) => (
          <figure key={item.src}>
            <img src={item.src} alt={item.alt} width="900" height="600" loading="lazy" />
          </figure>
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="gallery_pagination" aria-label={`${label} pagination`}>
          <button
            type="button"
            className="gallery_page_btn"
            disabled={safePage === 0}
            onClick={() => setPage(safePage - 1)}
            aria-label="Previous page"
          >
            Prev
          </button>
          <div className="gallery_page_nums" role="group" aria-label="Pages">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                className={i === safePage ? 'gallery_page_num is_active' : 'gallery_page_num'}
                aria-label={`Page ${i + 1}`}
                aria-current={i === safePage ? 'page' : undefined}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="gallery_page_btn"
            disabled={safePage >= totalPages - 1}
            onClick={() => setPage(safePage + 1)}
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      )}
    </>
  )
}
