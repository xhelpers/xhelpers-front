import { React, ReactDOM } from '@xhelpers-front/react/tools/react.tool';
import { Mui } from '@xhelpers-front/react/tools/mui.tool';

import HelloWorldComponent from '@xhelpers-front/react/components/HelloWorld.component';

const root = (ReactDOM as any).createRoot(document.getElementById('root') as HTMLElement);

const { Box, Typography, Container } = Mui;

root.render(
  <React.StrictMode>
    <Container>
      <Box display="flex" gap={2} flexDirection="column">
        <HelloWorldComponent />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, suscipit earum
          libero commodi pariatur quaerat eum dicta! Repudiandae accusamus iusto cumque
          necessitatibus amet voluptatibus adipisci facilis placeat eligendi dolore? Eius.
        </Typography>
      </Box>
    </Container>
  </React.StrictMode>,
);
