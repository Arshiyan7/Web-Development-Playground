const BookmarkName = document.querySelector('#bookmark-name')
const BookmarkUrl = document.querySelector('#bookmark-url')
const addBookmarkBtn = document.querySelector('#add_btn')
const bookmarkList = document.querySelector("#bookmark-list")

document.addEventListener("DOMContentLoaded",loadBookmarks())

addBookmarkBtn.addEventListener('click',function(){
    const name = BookmarkName.value.trim()
    const url = BookmarkUrl.value.trim()

    if (!name || !url) {
        alert("Please enter name and URL")
        return
    } else{
        if (!url.startsWith("https://") && !url.startsWith("http://")) {
            alert("Please enter Valid URL starting with (HTTP/HTTPS)")
            return
        }
        addBookmark(name,url)
        savedBookmark(name,url)
        BookmarkName.value = ""
        BookmarkUrl.value = ""
    }
})

function addBookmark(name,url){
    const li = document.createElement("li")
    const link = document.createElement("a")
    link.href = url
    link.textContent = name
    link.target = "_blank"

    const removeButton = document.createElement('button')
    removeButton.textContent = "Remove"
    removeButton.addEventListener('click',function(){
        bookmarkList.removeChild(li)
        removeBookmarkStorage(name,url)
    })

    li.appendChild(link)
    li.appendChild(removeButton)

    bookmarkList.appendChild(li)
}

function getBookmarkFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks")
    return bookmarks ? JSON.parse(bookmarks) : []
}

function savedBookmark(name,url){
    const bookmarks = getBookmarkFromStorage()
    bookmarks.push({name,url})
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
}

function loadBookmarks(){
    const bookmarks = getBookmarkFromStorage()
    bookmarks.forEach((bookmark) => {
        addBookmark(bookmark.name,bookmark.url)
    });
}
function removeBookmarkStorage(name,url){
    let bookmarks = getBookmarkFromStorage()
    bookmarks = bookmarks.filter((bookmark) => bookmark.name !== name || bookmark.url != url)
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
}