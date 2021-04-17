import { FC } from 'react'

interface PageButton {
  pageNum: number | null | undefined
  dirc: 'prev' | 'next'
  onClick: () => void
}

const PageBtn: FC<PageButton> = ({ pageNum, dirc, onClick }) => {
  return (
    <button disabled={!pageNum} className="pagination" onClick={onClick}>
      {dirc === 'next' ? (pageNum || 0) + ' >>' : '<< ' + (pageNum || 0)}
    </button>
  )
}
export default PageBtn
