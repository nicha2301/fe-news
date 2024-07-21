import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Comment } from '~/services/api/model/Comment';

export const CommentList = (props: { comments: Comment[] }) => {
  const sortedComments = [...props.comments].sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  });

  return (
    <div className="comment-list p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Danh sách bình luận</h3>
      {sortedComments.length === 0 ? (
        <p className="text-gray-500">Chưa có bình luận nào cho bài viết này.</p>
      ) : (
        <ul className="space-y-4">
          {sortedComments.map((comment, index) => {
            const timeAgo = isNaN(comment.createdAt.getTime())
              ? 'Unknown time'  
              : formatDistanceToNow(comment.createdAt, { locale: vi });

            return (
              <li key={index} className="flex items-start space-x-4">
                <div className="comment-avatar w-10 h-10 rounded-full overflow-hidden">
                  <img className="object-cover w-full h-full" src={comment.imageUrl} alt={comment.author} />
                </div>
                <div className="comment-content bg-gray-100 p-3 rounded-lg w-full">
                  <p className="text-sm text-gray-700">{comment.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    - {comment.user} • {timeAgo} trước
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
