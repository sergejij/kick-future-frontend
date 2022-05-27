import React from "react";

import CreateCampaignForm from "../../../components/CreateCampaignForm";
import Layout from "../../../components/Layout";
import PreviewCampaign from "../../../components/PreviewCampaign";
import styles from "./CreatePage.module.css";

const CreatePage = () => {
    return (
        <Layout>
            <div className={styles.topBlock}>
                <CreateCampaignForm />
            </div>
            <div className={styles.bottomBlock}>
                <PreviewCampaign />
            </div>
        </Layout>
    );
};

export default CreatePage;
