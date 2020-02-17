```
public/
views/
layout.erb (can many layout in one webapp)
  dishes/
    new.erb
    edit.erb
    index.erb
    show(details).erb
  reviews/
    new.erb
    edit.erb
    index.erb
    show(details).erb
  users/
    new.erb
    edit.erb
    index.erb
    show(details).erb

model/
  dish.rb
  review.rb
  user.rb
controllers/
dish_controller.rb
  review_controller.rb
  user_controller.rb

db/
  share.rb
  seed.rb
app_console.rb (test)
main.rb
```

dish.rb

```
# crud
# read
all_dish()
find_one_dish_by_id()

#create
create_dish()
# update
update_dish()
# destroy
delete_dish()
```
