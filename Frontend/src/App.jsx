import  Router  from "./Router.jsx"
import "./style.scss"
import { RegisterContext } from "./Features/Auth/Context/Register.Context.jsx"
import { PostContext } from "./Features/post/Context/PostContext.jsx"
import { EditContext } from "./Features/UserProfileInfo/Context/EditContext.jsx"
import { ProfileContext } from "./Features/UserProfile/Context/ProfileContext.jsx"
import { PostMeContext } from "./Features/UserProfile/Context/PostMeContext.jsx"
import {HomeContext} from "./Features/Home/Context/HomeContext.jsx"
import { LikeContext } from "./Features/Home/Context/LikeContext.jsx"
import { SaveContext } from "./Features/Home/Context/SaveContext.jsx"
import { SaveAllPostContext } from "./Features/SavePost/Context/SaveAllPostContext.jsx"
import { ReelContext } from "./Features/Reels/Context/ReelContext.jsx"
import { FetchAllReel } from "./Features/Reels/Context/FetchAllReelContext.jsx"
function App() {

  return (
    <RegisterContext>
      <PostContext>
        <EditContext>
          <ProfileContext>
            <PostMeContext>
              <HomeContext>
                <LikeContext>
                  <SaveContext> 
                    <SaveAllPostContext>
                     <ReelContext>
                      <FetchAllReel>
                      <Router/>

                      </FetchAllReel>
                     </ReelContext>
                    </SaveAllPostContext>
                  </SaveContext>
                </LikeContext>
              </HomeContext>
            </PostMeContext>
          </ProfileContext>
        </EditContext>
      </PostContext>
    </RegisterContext>
  )
}

export default App
