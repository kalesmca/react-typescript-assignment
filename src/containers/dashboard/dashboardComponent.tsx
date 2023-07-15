import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDebounce } from "../../customHooks/useDebounce";
import * as CONSTANTS from '../../config/constants';
import './dashboard.css';
import CardComponent from "../../common-components/card/cardComponent";
import {Dashboard, Dog} from '../../config/interfaceList';
import { useActions } from "../../customHooks/useActions";
import { useTypedSelector } from "../../customHooks/useTypedSelector";
const DashboardComponent: React.FC = () => {
    const dashboard: Dashboard = useTypedSelector((state) => state.dashboard);

    const [query, setQuery] = useState("");
    const searchQuery = useDebounce(query, 1000)
    const [key, setKey] = useState("nameAsc");
    const {getDogsByBreedName} = useActions();
    let index = 0;
    let flag = false


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 20 < document.documentElement.offsetHeight) {
            flag = true
            return;
        }
        if (!dashboard.isBucketFull && flag) {
            flag = false
            getDogsByBreedName(searchQuery, true, dashboard, key)
            index = index + 1;
        }


    };

    useEffect(()=>{
        getDogsByBreedName(searchQuery, false, dashboard, key)
    },[key])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    // useEffect(() => {
    //     dispatch(getDogsByBreedName(searchQuery, false, dashboard, key))

    // }, [])
    useEffect(() => {
        getDogsByBreedName(searchQuery, false, dashboard, key)

    }, [searchQuery])
    useEffect(() => {
        console.log("state:", dashboard);

    }, [dashboard])
    const setSortQuery = (e:any) => {
        setKey(e)
    }
    return (
        <div data-testid="dashboard-testId">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" >

                        {/* <Form.Label></Form.Label> */}
                        <Form.Control data-testid="searchQuery" type="text" value={query} onChange={(e) => { setQuery(e.target.value); index = 0 }} placeholder="Seach by Breed"
                        />
                    </Form.Group>
                </Row>
            </Form>
            
        <div>
          <span className="sort-title">SortBy:</span>
          <span>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setSortQuery(k)}
              className="mb-3"
              data-testid="tabsTest"
            >
                {
                    Object.keys(CONSTANTS.SORT_TAP_LIST).map((key:string, tabIndex) =>{
                        return(
                            <Tab data-testid="tab" key={tabIndex} eventKey={key} title={CONSTANTS.SORT_TAP_LIST[key].label}></Tab>
                        )
                    })
                }
              
            </Tabs>
          </span>
        </div>
            <div>
                {
                    dashboard?.dogList?.length ? dashboard.dogList.map((dog: Dog, dIndex: number) => {
                        return (
                            (
                                <CardComponent key={dIndex} dog={dog} />
                            )
                        )
                    })
                        : (<div data-testid="noData">No Data Found.</div>)
                }
            </div>
            
        </div>
    )
}

export default DashboardComponent;