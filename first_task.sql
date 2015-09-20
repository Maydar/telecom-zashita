select images.file_path, max(loaded_datetime) 
from images join users on images.user_id = users.user_id 
where users.login = 'dimuls';

select images.file_path, max(loaded_datetime)
from images join users on images.user_id = users.user_id
group by users.login;


--индексация loaded_datetime и login