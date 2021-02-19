import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AddContent from '@/pages/AddStory';
import Main from '@/pages/Main';
import Login from '@/pages/Login';
import Story from '@/pages/Story';
import MyPage from '@/pages/MyPage';
import MyPageEdit from '@/pages/MyPageEdit';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import Album from '@/pages/Album';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router>
            <Switch>
              <Route path={'/add'}>
                <AddContent />
              </Route>
              <Route path={'/album'}>
                <Album />
              </Route>
              <Route exact path={'/'}>
                <Main />
              </Route>
              <Route path={'/login'}>
                <Login />
              </Route>
              <Route path={'/story/:id'}>
                <Story />
              </Route>
              <Route exact path={'/myPage'}>
                <MyPage />
              </Route>
              <Route exact path={'/myPage/edit'}>
                <MyPageEdit />
              </Route>
            </Switch>
          </Router>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default hot(module)(App);
