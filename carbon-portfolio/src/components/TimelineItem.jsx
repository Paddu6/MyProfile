import { Tag, StructuredListWrapper, StructuredListBody, StructuredListRow, StructuredListCell } from '@carbon/react';
import './TimelineItem.scss';

const TimelineItem = ({ date, title, company, description, tags, isVolunteer = false }) => {
  return (
    <div className={`timeline-item ${isVolunteer ? 'timeline-item--volunteer' : ''}`}>
      <div className="timeline-item__marker"></div>
      <div className="timeline-item__content">
        <Tag type={isVolunteer ? 'green' : 'blue'} size="md" className="timeline-item__date">
          {date}
        </Tag>
        <h3 className="timeline-item__title">{title}</h3>
        <h4 className="timeline-item__company">{company}</h4>
        {Array.isArray(description) ? (
          <ul className="timeline-item__description">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="timeline-item__description">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="timeline-item__tags">
            {tags.map((tag, index) => (
              <Tag key={index} type={isVolunteer ? 'green' : 'purple'} size="sm">
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;

// Made with Bob
