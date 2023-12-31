import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/body.css";
import ExampleCarouselImage from "./CarouselImage";
import FrontPage from "./front-page";
const Body = () => {
  const [frontPagers, setFrontPagers] = useState("Empty");
  const [index, setIndex] = useState(0);
  const [searchedResult, setSearchedResult] = useState();
  const [sortBy, setSortBy] = useState("");
  const [searchBadges, setSearchBadges] = useState(["Remote", "Fresh", "new"]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [gettedTags, setGettedTags] = useState([
    "tag1",
    "tag2",
    "bigTag",
    "veryBigTag",
  ]);

  
  const jobListMaker = () => {
    let jobList = [];
    if (searchedResult) {
      if (searchedResult.result.length !== 0) {
        searchedResult.result.forEach((job) => {
          jobList.push(
            <div className="single-job" href="?there">
              <div className="title">
                <a href={job.url} className="title-title">
                  {job.title}
                </a>{" "}
                <a
                  href={job.url}
                  target="_blank"
                  className="fas fa-external-link"
                  aria-hidden="true"
                />
              </div>
              <p className="description">{job.content}</p>
              {/* TODO: find the way of the dots for description*/}
              <div className="external-info">
                <span className="from">{job.from}</span>
                <span className="when">{job.date}</span>
              </div>
            </div>
          );
        });
      } else {
        jobList.push(
          <h1
            className=""
            style={{
              color: "var(--accent)",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Empty Search
          </h1>
        );
      }
    } else {
      jobList.push(
        <div>
          <FrontPage data={searchPhrase} frontPagers={frontPagers} />
        </div>
      );
    }
    return jobList;
  };

  const addTags = (tag) => {
    setSearchBadges([...searchBadges, tag]);
  };
  const gettedTagsMaker = () => {
    const tags = [];
    gettedTags.forEach((tag) => {
      tags.push(
        <div
          className="search-badge"
          value={tag}
          onClick={(e) => {
            addTags(tag);
          }}
        >
          {tag}{" "}
        </div>
      );
    });
    return tags;
  };
  const searchBadgesMaker = () => {
    let searched = [];
    searchBadges.forEach((element) => {
      searched.push(<span className="search-badge">{element}</span>);
    });
    return (
      <form>
        <div className="d-flex p-2 justify-content-between me-2">
          <div className="">
            Tags
            <span
              className="fas fa-plus-circle search-badge-add"
              onClick={handleTagsOpner}
            ></span>
            <dialog id="tagsSearch">
              <div className="tagSearch">
                <div className="diag-header d-flex">
                  <span
                    className="close"
                    onClick={() =>
                      document.getElementById("tagsSearch").close()
                    }
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <div className="search-badges">{gettedTagsMaker()}</div>
                </div>
                <div className="diag-footer"></div>
              </div>
            </dialog>
          </div>
          {searchBadges.length == 0 ? (
            ""
          ) : (
            <span onClick={() => setSearchBadges([])}>Clear</span>
          )}
        </div>
        <div className="search-badges border rounded m-2">{searched}</div>
      </form>
    );
  };
  const handleTagsOpner = () => {
    document.getElementById("tagsSearch").showModal();

    // console.log(document.querySelector('#tagsSearch'));
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSearch = async () => {
    // const sortby = sortBy;
    const filterby = "unixDATE";
    fetch(
      `http://localhost:3100?sq=${searchPhrase}&sortby=${sortBy}&filter=${filterby}`,
      { method: "GET" }
    )
      .then((response) => response.text())
      .then((result) => {
        setSearchedResult(JSON.parse(result).respond);
        console.log(searchedResult);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handlefilter = () => {
    const thefilter = document.getElementById("filter");
    // alert(thefilter.getAttribute('data-filter'))
    if (thefilter.getAttribute("data-filter") === "false") {
      thefilter.setAttribute("data-filter", "true");
    } else {
      thefilter.setAttribute("data-filter", "false");
    }
  };
  useEffect(()=>{
    handleSearch();
  },[searchPhrase, sortBy])
  return (
    <div className="page">
      {/* <TopHeader /> */}
      <div className="image-container mt-3">
        <div className="image">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <ExampleCarouselImage text="First slide" pic="ad/wide.jpg" />
              <Carousel.Caption>
                <h3>Find your dream job</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Second slide" pic="ad/ByBit.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Third slide" pic="ad/12.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <form className="search" onSubmit={(e) => {e.preventDefault(); handleSearch()}}>
        <input
          id="searchInput"
          className="search-input"
          placeholder="Enter job title or keywords"
          onChange={(e)=>setSearchPhrase(e.currentTarget.value)}
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search" />
        </button>
      </form>
      <div className={searchedResult && searchedResult.result ? "filter" : "filter d-none"}>
        <span className="filter-toggle d-none" onClick={handlefilter}>
          Filter <i className="fas fa-angle-down"></i>
        </span>
        {/* <span className="filter-toggle">Sort <i className="fas fa-angle-down"></i></span> */}
        {/* <label htmlFor="sortSelect">Sort by:</label> */}
        <select
          name="sortSelect"
          id="sortSelect"
          onChange={(e) => setSortBy(e.currentTarget.value)}
          className="filter-toggle"
        >
          <option value="" hidden default>
            Sort by
          </option>
          <option value="">Relevance</option>
          <option value="unixDATE:desc">Recent</option>
          {/* <option value=""></option> */}
        </select>
        <div id="filter" className="filter-main" data-filter="false">
          {searchBadgesMaker()}
        </div>
      </div>
      <div className="jobs-list">
        <div className="jobs-head">
          {searchedResult && searchedResult.result ? (
            <div className="results">
              {searchedResult.estimatedTotalHits} results
            </div>
          ) : (
            ""
          )}
          <div className="divider"></div>
        </div>
        <div className="jobs-body">{jobListMaker()}</div>
      </div>
      {/* <div className="selection">
        <div className="title2">Location</div>
        <div className="chip-group">
          <div className="chip">
            <div className="text">Remote</div>
          </div>
          <div className="chip">
            <div className="text">New York</div>
          </div>
          <div className="chip">
            <div className="text">San Francisco</div>
          </div>
        </div>
      </div>
      <div className="tab-group">
        <div className="tab">
          <div className="frame">
            <div className="icon2">📚</div>
          </div>
          <div className="title3">Popular Jobs</div>
        </div>
        <div className="tab">
          <div className="frame">
            <div className="icon2">🌍</div>
          </div>
          <div className="title3">Remote Jobs</div>
        </div>
        <div className="tab">
          <div className="frame">
            <div className="icon2">📈</div>
          </div>
          <div className="title3">Trending Jobs</div>
        </div>
      </div>
      <div className="section-title">
        <div className="title-wrapper">
          <div className="title6">Top Jobs in New York</div>
          <div className="subtitle">Updated hourly</div>
        </div>
        <div className="button">
          <div className="title7">View All</div>
          <img className="icon5" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="list">
        <div className="chip-group">
          <div className="card">
            <div className="image-container1">
              <div className="image1">
                <div className="title8">Software Developer</div>
                <div className="tag">
                  <div className="text5">Featured</div>
                </div>
              </div>
            </div>
            <div className="text-content">
              <div className="title9">Full Stack Engineer</div>
              <div className="title6">3 days ago</div>
              <div className="icon-buttons1">
                <div className="icon">🔗</div>
                <div className="icon">👍</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image-container1">
              <div className="image1">
                <div className="title8">UX/UI Designer</div>
              </div>
            </div>
            <div className="text-content">
              <div className="title9">Product Designer</div>
              <div className="title6">5 days ago</div>
              <div className="icon-buttons1">
                <div className="icon">🔗</div>
                <div className="icon">👍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-title">
        <div className="title-wrapper">
          <div className="title6">Recent Reviews</div>
          <div className="subtitle">Read what others say about companies</div>
        </div>
        <div className="button d-none">
          <div className="title7">Write a Review</div>
          <img className="icon5" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="list1 border">
        <div className="chip-group">
          <div className="card2">
            <div className="user">
              <div className="avatar">
                <div className="avatar1" />
                <div className="title-wrapper">
                  <div className="title14">John</div>
                </div>
              </div>
              <img className="user-child" alt="" src="/frame-427318817.svg" />
            </div>
            <div className="title15">
              Great platform to find job opportunities!
            </div>
            <div className="icon-buttons3">
              <div className="icon">💬</div>
              <div className="icon">👏</div>
            </div>
          </div>
          <div className="card2">
            <div className="user">
              <div className="avatar">
                <div className="avatar1" />
                <div className="title-wrapper">
                  <div className="title14">Emily</div>
                </div>
              </div>
              <img className="user-child" alt="" src="/frame-4273188171.svg" />
            </div>
            <div className="title15">
              Highly recommend using this website for job hunting.
            </div>
            <div className="icon-buttons3">
              <div className="icon">💬</div>
              <div className="icon">👏</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-title">
        <div className="title-wrapper">
          <div className="title6">Featured Companies</div>
        </div>
        <div className="button">
          <div className="title7">See All Companies</div>
          <img className="icon5" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="list2 border">
        <div className="item">
          <div className="frame3">
            <div className="icon16">🏢</div>
          </div>
          <div className="title-parent">
            <div className="title20">Company Name</div>
            <div className="subtitle">Industry</div>
          </div>
          <div className="subtitle5">Location</div>
          <div className="icon-buttons5">
            <div className="icon">💼</div>
            <div className="icon">👀</div>
          </div>
          <img className="item-child" alt="" src="/vector-200.svg" />
        </div>
        <div className="item">
          <div className="frame3">
            <div className="icon16">🏢</div>
          </div>
          <div className="title-parent">
            <div className="title20">Company Name</div>
            <div className="subtitle">Industry</div>
          </div>
          <div className="subtitle5">Location</div>
          <div className="icon-buttons5">
            <div className="icon">💼</div>
            <div className="icon">👀</div>
          </div>
          <img className="item-child" alt="" src="/vector-200.svg" />
        </div>
      </div>
      <div className="bottom-nav border d-none">
        <div className="tab3">
          <div className="icon22">🏠</div>
          <div className="title22">Home</div>
        </div>
        <div className="tab3">
          <div className="icon22">📓</div>
          <div className="title22">Saved Jobs</div>
        </div>
        <div className="tab3">
          <div className="icon22">🔍</div>
          <div className="title22">Search</div>
        </div>
        <div className="tab3">
          <div className="icon22">😃</div>
          <div className="title22">Profile</div>
        </div>
      </div> */}
    </div>
  );
};

export default Body;
