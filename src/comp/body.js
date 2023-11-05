import React from "react";
import '../style/body.css'
const Body = () => {
  return (
    <div className="page">
      {/* <TopHeader /> */}
      <div className="image-container">
        <div className="image">
          <div className="title1">Find your dream job</div>
          <div className="pagination">
            <div className="pagination-child" />
            <div className="pagination-item" />
            <div className="pagination-item" />
            <div className="pagination-item" />
          </div>
          <div className="image-child" />
        </div>
      </div>
      <div className="selection">
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
      <form className="search">
        <input className="text3" placeholder="Enter job title or keywords" />
        <button type="submit" className="primary">
          <img className="ic-search-icon" alt="" src="/icsearch.svg" />
        </button>
      </form>
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
        <div className="button">
          <div className="title7">Write a Review</div>
          <img className="icon5" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="list1">
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
      <div className="list2">
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
      <div className="bottom-nav">
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
      </div>
    </div>
  );
};

export default Body;
