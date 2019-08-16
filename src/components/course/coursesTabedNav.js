import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const CourseTabs = ({ course }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>About the course</Tab>
                <Tab>Course Content</Tab>
                <Tab>Course Forum</Tab>
            </TabList>

            <TabPanel>
                <h1>{course.description}</h1>
            </TabPanel>
            <TabPanel>
                <h1>Chapiters and sections</h1>
            </TabPanel>
            <TabPanel>
                <h1>Question and announcements</h1>
            </TabPanel>
        </Tabs>
    )

}

export default CourseTabs;