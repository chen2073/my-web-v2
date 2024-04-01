import Image from 'next/image'

export default function Projects() {
    return (
      <div className="px-80 content-center">
        <h1 className="my-20 text-4xl font-bold leading-none tracking-tight text-gray-900">Past Projects</h1>
        
        <div className="my-10 flex justify-between">
          <div className="w-2/5">
            <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">This Personal Website</h2>
            <p>{"This personal website is created from scratch and a static site built on top of Next.js. It's deployed through AWS Amplify and more features are coming on this website"}</p>
          </div>
        </div>

        <div className="my-10 flex justify-between">
          <div className="w-2/5">
            <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">MetricsVis</h2>
            <p>An interactive visual analytic system for evaluating employee performance in organizations with varying workloads. Backend runs various clustering algorithms for comparing employee workload to generate ranking scores. Frontend visual is built on D3.js which contains a complex group performance view, a performance matrix view and a projection view for users to visually comprehend performance achievement.</p>
            <a href="https://ieeexplore.ieee.org/document/8805443" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Learn more</a>
          </div>
          <Image
              src="/metricsvis.png"
              alt="metricsvis"
              width={500}
              height={500}
              loading="lazy"
            />
        </div>


        <div className="my-10 flex justify-between">
          <div className="w-2/5">
            <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">FeatureExplorer</h2>
            <p>An interactive visual analytic system for domain experts to select features combinations to optimize machine learning models. Given pre-processed hyperspectral image data, backend applies regression algorithms (SVR, AdaBoost, Random Forest, etc.) from scikit-learn and ranks the results based on a custom scoring equation for different combinations. Frontend is built on D3.js, which consists a control panel for feature selection, a custom hierarchical clustering view and correlation matrix view and ranked bar chart.</p>
            <a href="https://arxiv.org/abs/1908.00671" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Learn more</a>
          </div>
          <Image
              src="/featureexplorer.png"
              alt="featureexplorer"
              width={500}
              height={500}
              loading="lazy"
            />
        </div>

        <div className="my-10 flex justify-between">
          <div className="w-2/5">
            <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Foreign Assistant</h2>
            <p>A prototype interactive visual analytical tools for US Foreign Assistant Agency to analyze annual categorical spending</p>
          </div>
          <Image
              src="/foreign.gif"
              alt="foreign assistant"
              width={500}
              height={500}
              loading="lazy"
            />
        </div>
      </div>
    );
  }