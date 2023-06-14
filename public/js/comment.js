const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#blog-desc').value;
    const blog_id = document.querySelector('#blog_id').textContent;

     // create and post new comment page
    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment, blog_id }),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

// Event listener for button
document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);