import { GoogleButton } from "../../components/GoogleButton";
import { ContainerCenter, ContentCenter } from "../../components/Layout";

export function LoginLayout() {
  return (
    <>
      <ContainerCenter>
        <ContentCenter>
          <h2>Faça o login com o Google 👋🏻</h2>
          <GoogleButton />
        </ContentCenter>
      </ContainerCenter>
    </>
  );
}
