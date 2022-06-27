import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Vos informations</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="Prénom"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Nom"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Emploi"
          />
          <input
            type="text"
            className="infoInput"
            name="LivesIN"
            placeholder="Lieux de résidence"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Informations supplémentaires sur vous"
          />
        </div>

        <div>
          Image de profil
          <input type="file" name="profileImg" />
          Image de couverture
          <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Sauvegarder</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
